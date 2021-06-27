import * as nodes from '../nodes'
import { CreateProjectAttrs } from './domain'
import { ProjectConfig } from './projectConfig'
import { ProjectContext } from './projectContext'

export function normalize(
    context: ProjectContext,
    config: ProjectConfig
): CreateProjectAttrs {
    const bound = nodes.create.bind(null, context)
    return {
        tasks: Object.entries(config.entry).map(([nodeName, entry]) =>
            bound({
                nodeName,
                input: entry.path,
            })
        ),
        rules: config.module.rules,
    }
}
