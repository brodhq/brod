/**
 * @file Send a HTTP request
 */
import { fetch } from '../../'

const response = fetch('google.com', ({ data }) => ({
    title: 1,
})).then(console.log)
