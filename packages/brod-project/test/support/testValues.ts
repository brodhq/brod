import { File } from '../../lib/files'

export interface FileMap {
    [filename: string]: File['content']
}
