import { NodeContext } from '../nodes'
import { ProjectAdapter } from './domain'

export interface ProjectContext extends NodeContext {
    adapter: ProjectAdapter
}
