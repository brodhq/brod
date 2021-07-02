import { load } from '@krans/project'
import fs from 'fs'
import path from 'path'

export const loader = load.bind(null, {
    file: {
        findOne(filepath) {
            const absolute = path.resolve(process.cwd(), filepath)
            try {
                const content = fs.readFileSync(absolute).toString('utf-8')
                return { content: content }
            } catch {
                console.warn(`file ${absolute} not found`)
                return null
            }
        },
    },
})
