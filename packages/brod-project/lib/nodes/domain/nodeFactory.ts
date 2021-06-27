import { CreateNodeAttrs } from './nodeAttrs'
import { Node } from './nodeTypes'

export function node(attrs: CreateNodeAttrs): Node {
    return { nodeName: attrs.nodeName, source: attrs.source, depends: [] }
}
