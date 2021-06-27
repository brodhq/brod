import path from 'path'
import { createProject } from '../lib'
import { createTestContext } from './support'

const context = createTestContext()

describe('tasks', () => {
    test('simple', () => {
        expect(
            createProject(context, {
                entry: {
                    main: { path: path.resolve('fixtures/simple.js') },
                },
            })
        ).toMatchObject({
            tasks: [
                {
                    nodeName: 'main',
                    source: expect.any(Function),
                    depends: [],
                },
            ],
        })
    })
    test('not found', () => {
        expect(() =>
            createProject(context, {
                entry: {
                    input: { path: 'lib/unknown.ts' },
                },
            })
        ).toThrowError(/not found/)
    })
})
