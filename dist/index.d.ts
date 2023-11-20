export type StringObject = Record<string, string>;
export declare const get: (url: URL | string, params?: StringObject | null, headers?: StringObject) => Promise<Response>;
export declare const post: (url: URL | string, params: any, headers?: StringObject) => Promise<Response>;
export declare const put: (url: URL | string, params: any, headers: StringObject) => Promise<Response>;
export declare const del: (url: URL | string, headers: StringObject) => Promise<Response>;
