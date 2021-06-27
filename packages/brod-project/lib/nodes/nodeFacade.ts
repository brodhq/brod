import { NodeConfig } from './nodeConfig'
import { node } from './domain/nodeFactory'
import { normalize } from './nodeNormalizer'
import { Node } from './domain'
import { NodeContext } from './nodeContext'

export function create(context: NodeContext, config: NodeConfig): Node {
    const attrs = normalize(context, config)
    const instance = node(attrs)
    return instance
}
