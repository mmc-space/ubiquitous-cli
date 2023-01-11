import { execSync } from 'child_process'
import { describe, expect, test } from 'vitest'

const cliCommand = 'create-mmc'

const run = (command: string) => execSync(command, { encoding: 'utf-8' })

describe('cli basic functions', () => {
  test('start cli', () => {
    const result = run(cliCommand)
    expect(result).toContain('Project name')
  })

  test('input template name to equal mmc ', () => {
    const inputName = run(`${cliCommand} mmc`)
    expect(inputName).toContain('mmc')
  })
})
