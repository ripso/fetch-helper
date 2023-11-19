export type StringObject = Record<string, string>;
export declare const get: (url: URL, params?: StringObject | null, headers?: StringObject) => Promise<Response>;
export declare const post: (url: URL, params: any, headers?: StringObject) => Promise<Response>;
export declare const put: (url: URL, params: any, headers: StringObject) => Promise<Response>;
export declare const del: (url: URL, headers: StringObject) => Promise<Response>;
