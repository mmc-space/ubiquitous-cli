import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

import { green, red, reset } from 'kolorist'
import prompts from 'prompts'

import { getDeps, optionalModules } from './utils/deps'
import { generatePackage } from './utils/package'
import { copy } from './utils/file'

const defaultProjectName = process.argv.pop() || 'mmc-projcet'

const bootstrap = async () => {
  const result = await prompts(
    [
      // name
      {
        type: 'text',
        name: 'projectName',
        message: reset('Project name:'),
        initial: defaultProjectName,
      },
      // modules
      {
        type: 'multiselect',
        name: 'modules',
        message: 'Select the required modules',
        instructions: false,
        choices: optionalModules,
      },
    ],
    {
      onCancel: () => {
        throw new Error(`${red('✖')} Operation cancelled`)
      },
    },
  )

  const { modules, projectName } = result

  if (existsSync(projectName))
    throw new Error(`${projectName} directory already exists`)

  const projectDir = mkdirSync(projectName, { recursive: true })!

  const deps = getDeps(modules as string[])
  const packageJson = generatePackage({ name: projectName, ...deps })
  writeFileSync(
    resolve(projectDir, 'package.json'),
    JSON.stringify(packageJson),
  )

  const templateDir = resolve(
    fileURLToPath(import.meta.url),
    '../..',
    'template',
  )

  for (const module of ['base', ...modules]) {
    const template = `${templateDir}/${module}`
    const files = readdirSync(template)
    for (const file of files)
      copy(resolve(template, file), resolve(projectDir, file))
  }

  console.log(green('create project complete!'))
}

bootstrap().catch(e => console.log('initialization error', e))
