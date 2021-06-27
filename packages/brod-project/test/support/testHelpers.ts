import fs from 'fs'
import path from 'path'

const FIXTURES = path.resolve(__dirname, '../fixtures')

export function fixture(filename: string) {
    return fs.readFileSync(path.resolve(FIXTURES, filename)).toString('utf-8')
}
