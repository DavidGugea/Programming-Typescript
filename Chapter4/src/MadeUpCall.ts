/*
function call(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
): unknown {
    return f(...args);
}

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
};

call(fill, 10, 'a')
*/

function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args);
}