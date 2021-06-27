import { ProjectEntryMap } from '../entries'
import { ProjectModule } from '../modules'

export interface ProjectConfig {
    entry: ProjectEntryMap
    module: ProjectModule
}
