import { CreateProjectAttrs } from './projectAttrs'
import { project } from './projectFactory'
import { Project } from './projectTypes'

export function create(attrs: CreateProjectAttrs): Project {
    const instance = project(attrs)
    return instance
}
