import { ProjectLoader } from '../loaders'

export interface ProjectModule {
    rules: ProjectModuleRule[]
}

export interface ProjectModuleRule {
    test: RegExp
    loader: ProjectLoader
}
