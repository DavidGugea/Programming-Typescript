function* createFibonacciGenerator() {
    let a = 0
    let b = 0

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    };
};

let fibonacciGenerator = createFibonacciGenerator();
fibonacciGenerator.next();
fibonacciGenerator.next();

function* createNumbers(): IterableIterator<number> {
    let n = 0;
    while (1) {
        yield n++;
    };
};

let numbers = createNumbers();
numbers.next();
numbers.next();
numbers.next();