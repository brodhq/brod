import { Command, flags } from '@oclif/command'
import { run } from '@krans/runner'
import { loader } from '../cliContainer'

export default class Up extends Command {
    static description = 'describe the command here'

    static examples = [
        `$ brod up
up world from ./src/up.ts!
`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
        // flag with a value (-n, --name=VALUE)
        name: flags.string({ char: 'n', description: 'name to print' }),
        // flag with no value (-f, --force)
        force: flags.boolean({ char: 'f' }),
    }

    static args = [{ name: 'file' }]

    async run() {
        const { args, flags } = this.parse(Up)
        const project = await loader()
        const source = run(project)
        for await (const record of source) {
            console.log(record)
        }
    }
}
