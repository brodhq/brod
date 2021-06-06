export interface FetchResponse {
    status: number
    data: any
}

export async function fetch<T>(
    url: string,
    callback: (response: FetchResponse) => T
): Promise<T> {
    return callback({ status: 200, data: {} })
}
