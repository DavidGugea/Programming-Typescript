function readFile(
    path: string,
    options: {encoding: string, flag?: string},
    callback: (err: Error | null, data: string | null) => void
): void {};