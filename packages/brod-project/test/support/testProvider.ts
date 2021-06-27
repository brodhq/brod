import { ProjectContext } from '../../lib'
import { TestConfig } from './testConfig'

export function createTestContext({
    files = {
        'main.ts': '[1, 2, 3]',
    },
    ...overrides
}: Partial<TestConfig> = {}): ProjectContext {
    return {
        adapter: {},
        file: {
            findOne: (filename) =>
                files[filename] ? { filename, content: files[filename] } : null,
        },
        loaders: [
            {
                extension: '.ts',
                fn: (raw) => ({ source: eval(raw), depends: [] }),
            },
        ],
        ...overrides,
    }
}
