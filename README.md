# Fetch Helper

Introducing our new NPM package for JavaScript: `Fetch Helper` ! Say goodbye to complicated syntax and hello to clean, efficient code with our methods that simplify the use of fetch. ✨ 🙏

Our package provides an easy-to-use interface that allows you to make HTTP requests with ease. With our typescript definitions, you can write more robust and maintainable code with less effort. 👌

## Get started

### Installation

```
npm install --save @ripso/fetch-helper
```

### Definitions

```ts
export type StringObject = Record<string, string>

export declare const get: (url: URL | string, params?: StringObject | null, headers?: StringObject) => Promise<Response>
export declare const post: (url: URL | string, params: any, headers?: StringObject) => Promise<Response>
export declare const put: (url: URL | string, params: any, headers: StringObject) => Promise<Response>
export declare const del: (url: URL | string, headers: StringObject) => Promise<Response>

```

### Import

```ts
import { get, post, put, del } from '@ripso/fetch-helper'
```

### Usage

```ts
get('https://www.example.com', {
  foo:'bar'
})
// Will perform a GET request to https://www.example.com/?foo=bar

post('https://www.example.com/users', {
  firstname: 'John',
  lastname: 'Smith',
})
// Will perform a POST request to https://www.example.com/users with users parameters

put('https://www.example.com/users/1', {
  firstname: 'John',
  lastname: 'Smith',
})
// Will perform a PUT request to https://www.example.com/users/1 with users parameters

del('https://www.example.com/users/1')
// Will perform a DELETE request to https://www.example.com/users/1
```

## Try it

Try out `Fetch Helper` today and see how much easier your JavaScript development process will become! 🚀
