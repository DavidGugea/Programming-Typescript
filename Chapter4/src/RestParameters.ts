function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}