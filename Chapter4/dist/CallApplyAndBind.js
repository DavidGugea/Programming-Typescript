"use strict";
function add(a, b) {
    return a + b;
}
;
add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)();
//# sourceMappingURL=CallApplyAndBind.js.map