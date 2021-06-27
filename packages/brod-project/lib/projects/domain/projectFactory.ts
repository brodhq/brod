import { CreateProjectAttrs } from './projectAttrs'
import { Project } from './projectTypes'

export function project(attrs: CreateProjectAttrs): Project {
    return {
        nodes: attrs.nodes ?? [],
    }
}
