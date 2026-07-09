// const Todo = require('./async')

// const myTodo = new Todo();

// myTodo.clear();
// myTodo.add('call vikram Sandhu');
// myTodo.add('call Priyanka Sekhri');
// myTodo.getall();
// myTodo.getA(1);

// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     return inner;
// }

// let fn = outer();
// console.log(fn);

// function outer() {
//     let x = 10;
//     console.log(x);

//     setTimeout(() => {
//         console.log(x);
//     }, 3000);
// }

// outer();

// // example of closure ecause what happened is:
// // the outer funtion is already finished before the setTimeout.
// // so no refrence to x must have existed but
// // due to the concept of closures the scope(vars) of seTimeout is preserved
// // that is the callback still holds x's value.

// PROMISE 

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function helper(resolve, n){
//     setTimeout(()=>{
//             console.log('waited!');
//             resolve();
//         },n*1000);
// }

// function wait(n){
//     return new Promise((resolve)=>{
//         helper(resolve, n);
//     })
// }

// function callback(){
//     console.log('callback reached');
// }

// wait(3).then(callback);



// function helper(n){
//     return new Promise((promise)=>{
//         setTimeout(() => {
//             console.log('resolved!')
//             promise();
//         }, n*1000);
//     });
// }

// function anycallback(){
//     console.log('Any callback!')
// }

// helper(3).then(anycallback);




/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milli){
//     return new Promise((resolve)=>{
//         let start = new Date().getTime();
//         while(new Date().getTime() < milli + start){
//             resolve();
//         }
//     });
// }

// sleep(3000);


/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// function resolveTime(resolve, n){
//     setTimeout(()=>{
//         console.log('waited ',n,' seconds!');
//         resolve();
//     },n*1000)
// }

// function one(n){
//     let p = new Promise((resolve)=>{
//         resolveTime(resolve, n);
//     });
//     return p;
// }

// function two(n){
//     return new Promise((resolve)=>{
//         resolveTime(resolve, n);
//     });
// }

// function three(n){
//     return new Promise((resolve)=>{
//         resolveTime(resolve, n);
//     });
// }

// function callback(){
//     console.log('callback!');
// }

// function all(promises){
//     const t = new Date().getTime()
//     return Promise.all(promises)
//         .then(()=>{
//         console.log('Time taken: ', (new Date().getTime() - t)/1000, ' seconds');
//     })
// }

// all([one(3), two(2), three(5)]);


/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function resolveTime(resolve, n){
    setTimeout(() => {
        console.log('resolved in ',n,' seconds');
        resolve();
    }, n*1000);
}


function w1(n){
    return new Promise((resolve)=>{
        resolveTime(resolve, n);
    })
}
function w2(n){
    return new Promise((resolve)=>{
        resolveTime(resolve, n);
    })
}
function w3(n){
    return new Promise((resolve)=>{
        resolveTime(resolve, n);
    })
}

function calculate(p1, p2, p3){
    const start = Date.now();
    return p1(1)
        .then(() => p2(2))
        .then(() => p3(4))
        .then(() => {
            return (Date.now() - start) / 1000;
        });
}

calculate(w1, w2, w3).then((time )=>{
    console.log("Total time taken", time, " seconds!");
} )







