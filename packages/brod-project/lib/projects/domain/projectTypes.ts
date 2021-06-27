import { ProjectModuleRule } from '../../modules'
import { Node } from '../../nodes'

export interface Project {
    tasks: Node[]
    rules: ProjectModuleRule[]
}
