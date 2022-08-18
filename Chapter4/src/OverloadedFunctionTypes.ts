class Reservation {
    constructor(a: number, b: number) {
        console.log(a, b);
    }
}

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation,
    (from: Date, destination: string): Reservation,
}

const reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    /*
    if(toOrDestination instanceof Date && destination !== undefined) {
        return new Reservation(1, 2);
    } else if (typeof toOrDestination === 'string') {
        return new Reservation(1, 2);
    }
    */
    return new Reservation(1, 2);
};