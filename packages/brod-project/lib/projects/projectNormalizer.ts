import * as nodes from '../nodes'
import { CreateProjectAttrs } from './domain'
import { ProjectConfig } from './projectConfig'
import { ProjectContext } from './projectContext'

export function normalize(
    context: ProjectContext,
    config: ProjectConfig
): CreateProjectAttrs {
    const bound = nodes.create.bind(null, context)
    if (Array.isArray(config)) {
        return {
            nodes: config.map(bound),
        }
    } else {
        return {
            nodes: [bound(config)],
        }
    }
}
