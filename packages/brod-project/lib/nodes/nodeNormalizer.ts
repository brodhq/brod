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
    const loader = fetchLoader(context, extension)
    const raw = fetchFile(context.file, filename)
    const { source, depends } = loader.fn(raw.content)
    return {
        nodeName: filename.replace(/\..+$/g, ''),
        source,
        depends,
    }
}

function fetchLoader(context: NodeContext, extension: string) {
    const loader = context.loaders.find(
        (loader) => loader.extension === extension
    )
    if (!loader) {
        throw new Error(`loader '${extension}' not found`)
    }
    return loader
}
