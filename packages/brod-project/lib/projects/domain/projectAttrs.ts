import { ProjectModuleRule } from '../../modules'
import { CreateNodeAttrs } from '../../nodes'

export interface CreateProjectAttrs {
    tasks?: CreateNodeAttrs[]
    rules?: ProjectModuleRule[]
}
