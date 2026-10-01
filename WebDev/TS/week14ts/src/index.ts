// interface location {
//     state: string,
//     pin: number
// }

// interface User extends location{
//     name: string,
//     age: number
// }

// interface Admin extends User, location{
//     position: string
// }

// function greetIfAdult(user: User):Boolean{
//     if(user.age>=18){
//         console.log(`hello ${user.name} and your age is: ${user.age} and I think you are from ${user.state} with pin code ${user.pin}!`);
//         return true;
//     }
//     else{
//         console.log(`lol ${user.name} kiddo!`)
//         return false;
//         };
// }

// let Jassi: Admin = {
//     name: "jassi",
//     age: 23,
//     position: "CEO",
//     state:"HP",
//     pin:190021,
//     }


// let user: User = {
//     name: "Ishan",
//     age: 25,
//     state:"HP",
//     pin:175019
//     }

// let user1: User = {
//     name: "Abhinav",
//     age: 15,
//     state: "Delhi",
//     pin: 160012
// }

// greetIfAdult(user);
// greetIfAdult(user1);
// greetIfAdult(Jassi);


// type People = {
//     name: '' | 'Ishan',
//     age: number,
//     greet: () => void
// }

// let person: People = {
//     name: 'Ishan',
//     age: 25,
//     greet: ()=>{
//         return 'hi';
//     }
// } 

// person.greet()

// console.log(`so this is the person: ${person.name}, ${person.greet()}`);


interface Admin {
    name: string,
    permissons: string
}

interface User {
    name: string,
    age: number
}

type userOrAdmin = User | Admin;

function greet(user: userOrAdmin):string{
    return `hello ${user.name}`;
}

let u: User = {
    name: 'Ishan',
    age: 25
}

let a: Admin = {
    name: 'Harry',
    permissons:'all access'
}

console.log(greet(u));