/**
 * @file Send a HTTP request
 */

import { Krans, Plugin } from 'krans'
import { http } from '@krans/http'

export const plugin: Plugin = {
    [Krans.plugin]: {
        name: 'my-plugin',
        depends: [http],
        register({ http }) {
            return {
                create() {
                    return {}
                },
                destroy() {},
            }
        },
    },
}
