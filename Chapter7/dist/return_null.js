"use strict";
function prompt(test) {
    return Date.now().toString();
}
function ask() {
    return prompt('When is your birthday?');
}
function parse(birthday) {
    return new Date(birthday);
}
let date = parse(ask());
console.info(`Date is ${date.toISOString()}`);
function isValid(userDate) {
    return Object.prototype.toString.call(userDate) === '[object Date]' && !Number.isNaN(userDate.getTime());
}
//# sourceMappingURL=return_null.js.map