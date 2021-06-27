import { CreateProjectAttrs } from './projectAttrs'
import { Project } from './projectTypes'

export function project({
    rules = [],
    tasks = [],
    ...attrs
}: CreateProjectAttrs): Project {
    return {
        ...attrs,
        tasks,
        rules,
    }
}
