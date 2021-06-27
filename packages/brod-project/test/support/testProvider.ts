import { loader as pluginLoader } from '@krans/loader-plugin'
import { ProjectContext } from '../../lib'
import { TestConfig } from './testConfig'
import { fixture } from './testHelpers'

export function createTestContext({
    files = {},
    ...overrides
}: Partial<TestConfig> = {}): ProjectContext {
    return {
        adapter: {},
        file: {
            findOne: (filename) =>
                fixture(filename)
                    ? { filename, content: fixture(filename) }
                    : null,
        },
        loaders: [
            {
                test: /\.js$/,
                loader: pluginLoader,
            },
        ],
        ...overrides,
    }
}
