import { ProjectConfig } from './projectConfig'
import { ProjectContext } from './projectContext'
import { normalize } from './projectNormalizer'
import { Project, project } from './domain'

/**
 * Create a new project from configuration
 * @param context
 * @param config
 * @returns
 */
export function createProject(
    context: ProjectContext,
    config: ProjectConfig = []
): Project {
    const attrs = normalize(context, config)
    const instance = project(attrs)
    return instance
}