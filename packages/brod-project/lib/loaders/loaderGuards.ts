import { ProjectLoader, ResolvableLoader } from './loaderTypes'

export function isResolvable(
    loader: ProjectLoader
): loader is ResolvableLoader {
    return typeof loader === 'string'
}
