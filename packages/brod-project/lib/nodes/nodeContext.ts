import { FileAdapter } from '../files'
import { Loader } from '../loaders'

export interface NodeContext {
    file: FileAdapter
    loaders: Loader[]
}
