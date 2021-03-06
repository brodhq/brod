/**
 * @file Send a HTTP request
 */

// file ./krans.config.js
import { http } from '@krans/http'

export default {
    input: 'src/main',
    output: [File(Json, 'my-file.json')],
    plugins: [http()],
}

// file ./main.js
import { fetch } from '@krans/fetch'
import { Json } from '@krans/json'

export const main = fetch(Json, 'https://google.com', ({ data }) => ({
    title: data['title'].toString(),
    name: data['name'].toString(),
    description: data['description'].toString(),
    summary: data['summary'].toString(),
}))
