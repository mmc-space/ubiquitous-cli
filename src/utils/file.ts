import { copyFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

function copyDir(fromDir: string, destDir: string) {
  mkdirSync(destDir, { recursive: true })
  for (const file of readdirSync(fromDir)) {
    const fromFile = resolve(fromDir, file)
    const destFile = resolve(destDir, file)

    copy(fromFile, destFile)
  }
}

export function copy(from: string, dest: string) {
  const stat = statSync(from)
  if (stat.isDirectory()) {
    copyDir(from, dest)
    return
  }

  copyFileSync(from, dest)
}
