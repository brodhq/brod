import path from 'path'
import { NodeConfig } from './nodeConfig'
import { CreateNodeAttrs } from './domain'
import { NodeContext } from './nodeContext'
import { fetchFile } from '../files'

export function normalize(
    context: NodeContext,
    config: NodeConfig
): CreateNodeAttrs {
    const filename = path.basename(config.input)
    const extension = path.extname(filename)
    const selected = fetchLoader(context, extension)
    const raw = fetchFile(context.file, filename)
    const { register, depends } = selected.loader(raw.content)
    return {
        nodeName: config.nodeName ?? filename.replace(/\..+$/g, ''),
        // @ts-expect-error
        source: register(null, null),
        depends,
    }
}

function fetchLoader(context: NodeContext, extension: string) {
    const loader = context.loaders
        .slice()
        .reverse()
        .find((candidate) => candidate.test.test(extension))
    if (!loader) {
        throw new Error(`loader '${extension}' not found`)
    }
    return loader
}
