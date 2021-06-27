import { File } from './fileTypes'

export interface FileAdapter {
    findOne: (filepath: string) => File | null
}
