"use strict";
class Reservation {
    constructor(a, b) {
        console.log(a, b);
    }
}
const reserve = (from, toOrDestination, destination) => {
    /*
    if(toOrDestination instanceof Date && destination !== undefined) {
        return new Reservation(1, 2);
    } else if (typeof toOrDestination === 'string') {
        return new Reservation(1, 2);
    }
    */
    return new Reservation(1, 2);
};
//# sourceMappingURL=OverloadedFunctionTypes.js.map