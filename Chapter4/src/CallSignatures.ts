// function greet(name: string)
type Greet = (name: string) => string

// function log(mesasge: string, userId?: string)
type Log = (message: string, userId?: string) => void

// function sumvariadicSafe(...numbers: numbers]): number
type SumVariadicSafe = (...numbers: number[]) => number

const log4: Log = (message, userId = "Not signed in") => {
    const time = new Date().toISOString();
    console.log(time, message, userId);
}