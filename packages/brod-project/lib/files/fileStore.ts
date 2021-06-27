import { FileAdapter } from './fileAdapter'

export function getFile(adapter: FileAdapter, filename: string) {
    return adapter.findOne(filename)
}

export function fetchFile(adapter: FileAdapter, filename: string) {
    const found = getFile(adapter, filename)
    if (!found) {
        throw new Error(`file '${filename}' not found`)
    }
    return found
}
