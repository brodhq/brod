import { NodeReference } from './domain'

export interface NodeFileConfig extends Partial<NodeReference> {
    input: string
}

export type NodeConfig = NodeFileConfig
