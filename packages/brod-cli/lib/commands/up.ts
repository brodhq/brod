import { Command, flags } from '@oclif/command'
import { load } from '@krans/project'

const loader = load.bind(null, {})

export default class Hello extends Command {
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
        const { args, flags } = this.parse(Hello)
        const project = await loader()
        const name = flags.name ?? 'world'
        this.log(`up ${name} from ./src/commands/up.ts!`)
        this.log(JSON.stringify(project))
    }
}
