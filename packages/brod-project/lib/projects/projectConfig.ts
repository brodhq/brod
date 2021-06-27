export interface ProjectSingleConfig {
    input: string
}

export type ProjectMultiConfig = ProjectSingleConfig[]

export type ProjectConfig = ProjectSingleConfig | ProjectMultiConfig
