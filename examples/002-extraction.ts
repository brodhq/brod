/**
 * @file Send a HTTP request
 */
import { fetch } from '..'

const response = fetch('google.com', ({ data }) => ({
    title: data['title'].toString(),
})).then(console.log)
