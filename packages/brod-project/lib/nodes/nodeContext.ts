import type { LoaderConfig } from '@krans/loader-core'
import { FileAdapter } from '../files'

export interface NodeContext {
    file: FileAdapter
    loaders: LoaderConfig[]
}
