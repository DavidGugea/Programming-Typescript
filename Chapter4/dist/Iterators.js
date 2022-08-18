"use strict";
let numbers2 = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
        ;
    }
};
for (const a of numbers) {
    console.log(a);
}
let allNumbers = [...numbers];
let [one, two, ...rest] = numbers;
//# sourceMappingURL=Iterators.js.map