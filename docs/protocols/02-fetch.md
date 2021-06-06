---
section: protocols
title: Fetch
slug: fetch
---

### Fetch

The fetch protocol is designed for fetching and parsing unstructured data over HTTP.

### <a name="fetch()" /> `fetch([options])`

Creates a new fetch object where:
- `options` - (optional) a [fetch configuration object](#fetch.options).

```typescript
const url = 'https://jsonplaceholder.typicode.com/todos/1'
const response = fetch(url, resp => 
  console.log(resp)
)
```

### <a name="fetch.options" /> Fetch options

The fetch options control the behavior of the fetch object. Note that the options object is deeply cloned (with the exception of [`listener`](#fetch.options.listener) which is shallowly copied) and should not contain any values that are unsafe to perform deep copy on.

All options are optionals.

#### <a name="fetch.method()" /> `fetch.method([method])`

Set the HTTP method.

Default value: `'GET'`.

#### <a name="fetch.header()" /> `fetch.header([name, value])`

Set a HTTP header.
