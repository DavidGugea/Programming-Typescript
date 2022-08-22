function prompt(test: string) {
    return Date.now().toString();
}

function ask() {
    return prompt('When is your birthday?');
}

function parse(birthday: string): Date {
    return new Date(birthday);
}

let date = parse(ask());
console.info(`Date is ${date.toISOString()}`);

function isValid(userDate: Date) {
    return Object.prototype.toString.call(userDate) === '[object Date]' && !Number.isNaN(userDate.getTime())
}