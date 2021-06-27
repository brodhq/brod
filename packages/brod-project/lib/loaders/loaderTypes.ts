import { Node } from '../nodes'

export type LoaderFn = (raw: string) => Pick<Node, 'source' | 'depends'>

export interface Loader {
    extension: string
    fn: LoaderFn
}
