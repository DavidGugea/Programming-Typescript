// User has a single field, name
interface User {
    name: string
};


// User has now two fields, name and age
interface User {
    age: number
};


let a: User = {
    name: 'Ashley',
    age: 30
};