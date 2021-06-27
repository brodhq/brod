import { createProject } from '../lib'
import { createTestContext } from './support'

const subject = createProject.bind(
    null,
    createTestContext({ files: { 'main.ts': '[1, 2, 3]' } })
)

describe('config', () => {
    test('simple', () => {
        expect(
            subject({
                input: 'lib/main.ts',
            })
        ).toMatchObject({
            nodes: [
                {
                    nodeName: 'main',
                    source: [1, 2, 3],
                    depends: [],
                },
            ],
        })
    })
    test('not found', () => {
        expect(() =>
            subject({
                input: 'lib/unknown.ts',
            })
        ).toThrowError(/not found/)
    })
})
