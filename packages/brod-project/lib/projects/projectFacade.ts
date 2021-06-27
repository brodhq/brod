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
    {
        entry = {},
        module = { rules: [] },
        ...config
    }: Partial<ProjectConfig> = {}
): Project {
    const attrs = normalize(context, { entry, module, ...config })
    const instance = project(attrs)
    return instance
}
