export interface NodeReference {
    nodeName: string
}

export type NodeSource = (context: object) => Iterable<any>
