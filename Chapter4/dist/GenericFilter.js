"use strict";
let filter = (array, f) => {
    const result = [];
    for (const i of array) {
        if (f(i)) {
            result.push(i);
        }
    }
    return result;
};
filter([1, 2, 3], _ => _ > 2);
filter(['a', 'b'], _ => _ !== 'b');
let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' },
];
filter(names, _ => _.firstName.startsWith('b'));
//# sourceMappingURL=GenericFilter.js.map