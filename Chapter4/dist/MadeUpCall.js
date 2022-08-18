"use strict";
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
function call(f, ...args) {
    return f(...args);
}
//# sourceMappingURL=MadeUpCall.js.map