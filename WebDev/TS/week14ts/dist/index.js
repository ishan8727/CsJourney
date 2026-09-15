"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type User = {
//     name: string,
//     age: number,
//     location: {
//         state: string,
//         pin: number
//     }
// }
function greetIfAdult(user) {
    if (user.age >= 18) {
        console.log(`hello ${user.name} and your age is: ${user.age} and I think you are from ${user.location.state} with pin code ${user.location.pin}!`);
        return true;
    }
    else {
        console.log('lol kiddo!');
        return false;
    }
    ;
}
let user = {
    name: "Ishan",
    age: 15,
    location: {
        state: "HP",
        pin: 175019
    }
};
greetIfAdult(user);
//# sourceMappingURL=index.js.map