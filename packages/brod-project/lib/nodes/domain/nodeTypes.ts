import { NodeReference, NodeSource } from './nodeValues'

export interface Node extends NodeReference {
    depends: NodeReference['nodeName'][]
    source: NodeSource
}
