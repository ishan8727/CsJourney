// function sum(a,b){
//     return (a+b);
// }

// let ans = sum(7,5);

// console.log(ans);


// function sum(n){
//     let ans = 0;
//     for(let i=1; i<=n; i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// const ans = sum(10);
// console.log(ans);

// const fs = require('fs');

// function show(err, data){
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", show);
// fs.readFile("a.txt", "utf-8", show);

// console.log("Done!");


// function anagram(str1, str2){

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     if(sortedStr1 === sortedStr2){
//         return 1
//     }
//     else return 0;
// }

// const a = process.argv[2];
// const b = process.argv[3];  

// const f = anagram(a,b);

// if(f==1) console.log('Anagram!');
// else console.log('Not an Anagram!');



// function calculateTotalSpentByCategory(transactions) {
//     const ans = {};
//     transactions.map(transaction => {
//         const{ category, price } =  transaction;
//         if(category in ans){
//             ans[category]+=price;
//         }
//         else{
//             ans[category] = price;
//         }
//     });
//     const result = [];
//     for(const category in ans){
//         result.push({category, totalSpent: ans[category]});
//     }
//     return result;
// }

// const transactions = [
//   {
//     id: 1,
//     timestamp: Date.now(),
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: Date.now(),
//     price: 25,
//     category: 'Utensil',
//     itemName: 'Pressure Cooker',
//   },
//   {
//     id: 3,
//     timestamp: Date.now(),
//     price: 5,
//     category: 'Stationery',
//     itemName: 'Pen',
//   },
//   {
//     id: 4,
//     timestamp: Date.now(),
//     price: 12,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 5,
//     timestamp: Date.now(),
//     price: 18,
//     category: 'Utensil',
//     itemName: 'Frying Pan',
//   },
//   {
//     id: 6,
//     timestamp: Date.now(),
//     price: 7,
//     category: 'Stationery',
//     itemName: 'Notebook',
//   },
//   {
//     id: 7,
//     timestamp: Date.now(),
//     price: 15,
//     category: 'Food',
//     itemName: 'Pasta',
//   },
//   {
//     id: 8,
//     timestamp: Date.now(),
//     price: 30,
//     category: 'Utensil',
//     itemName: 'Knife Set',
//   },
//   {
//     id: 9,
//     timestamp: Date.now(),
//     price: 3,
//     category: 'Stationery',
//     itemName: 'Pencil',
//   },
//   {
//     id: 10,
//     timestamp: Date.now(),
//     price: 20,
//     category: 'Food',
//     itemName: 'Sandwich',
//   }
// ];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);




// function findLargestElement(numbers) {
//     let ans = numbers.sort();
//     ans = ans.reverse();
//     return ans[0];
// }

// const largest = findLargestElement([41,12,85,37,23,19,50]);
// console.log(largest);



// function vowelCount(str){
//     let str1 = str.toLowerCase().split('');
    
//     let count = 0;
//     for(let i=0; i<str1.length; i++){
//         if(str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// const ans = vowelCount("Jaspreet Singh");
// console.log(ans)



// function vowelCount(str){

//     let vowelStr = 'aeiouAEIOU';
//     let count = 0;

//     for(let char of str){
//         if(vowelStr.includes(char)) {
//             count ++;
//         }
//     }

//     return count;
// }

// const ans = vowelCount('Jaspreet Singh');
// console.log(ans)





// function time(n){
//     const t = Date.now();
    
//     let sum = 0;
//     for(let i=0 ; i<n; i++){
//         sum+=i;
//     }
//     console.log(sum);
//     const _t = Date.now();
    
//     return (_t-t);
// } 

// const ans = time(19990000000);
// console.log(ans/1000, 'seconds');





    // class Calculator{

    //     constructor(){
    //         this.result = 0;
    //     }
    //     add(number){
    //         this.result+=number;
    //     }
    //     sub(number){
    //         this.result-=number;
    //     }
    //     div(number){
    //         if(number===0){
    //             throw new Error("Invalid expression divide by zero!");
    //         }
    //         else this.result/=number;
    //     }
    //     mult(number){
    //         this.result*=number;
    //     }
    //     calculate(str){
    //         let str1 = str.split('');
    //         str1.replace();
    //     }
    //     clear(){
    //         this.result = 0;
    //     }
    //     getResult(){
    //         console.log(this.result);
    //     }
    // }

    // const myCalculator = new Calculator();



// class Todo {

//     list = [];

//     add(str){
//         this.list.push(str);
//         console.log("added: ",str);
//     }
//     sub(str){
//         this.list.pop(str);
//         console.log("removed: ",str);
//     }   
//     update(index, str){
//         this.list[index-1] = str;
//     }
//     getA(index){
//         console.log(this.list[index-1]);
//     }
//     getall(){
//         console.log(this.list);
//     }
//     clear(){
//         this.list = [];
//     }
// }

// module.exports = Todo;


// function counter(n){
    
//     const id = setInterval(() => {
//         console.log(n)
//         n--;
//         if(n==0) clearInterval(id);
//     }, 1000);
// }

// counter(10);

// function counter(n){
//     for (let i = 0; i < n; i++) {
//         setTimeout(()=>{
//             console.log(i);
//         },1000)
//     }
// }


// function counter(n){
//     for (let i = 0; i < n; i++) {
//         setTimeout(()=>{
//             console.log(i)
//         },1000*(n-i));   
//     }
// }

// counter(6);

// function showTime(){
//   const date = new Date();
//   console.log('Time is: ',((date.getHours()+11)%12+1).toString().padStart(2,'0'),':',date.getMinutes().toString().padStart(2,'0'),':',date.getMinutes().toString().padStart(2,'0'));
// }

// let n = 10;


// for (let i = 0; i < n; i++) {
//   setTimeout(() => {
//   showTime()
// }, 1000*i);
// }


// class Todo{

//     constructor(){
//         this.t = [];
//     }

//     add(...todo){
//         this.t.push(...todo);
//     }
//     remove(i){
//         this.t.splice(i,1);
//     }
//     update(i, todo){
//         this.t[i] = todo;
//     }
//     getAll(){
//         console.log(this.t);
//     }
//     get(i){
//         console.log(this.t[i]);
//     }
//     clear(){
//         this.t = [];
//     }
// }

// let t = new Todo();

// t.add("Complete Office work","Complete course learn to code","Maintain relations as much as you can","maitain health as well");
// t.getAll();

// function counter(){
//     for (var i = 1; i <= 10; i++) {
//         setTimeout(()=>{
//             console.log(i);
//         },1000*i);
//     }
// }

// counter();


// const fs = require('fs');

// const content = fs.readFileSync('a.txt','utf-8');
// console.log(content);

// const map = new Map();
// map.set("Ishan", "chaudhary");
// map.set("age",24);
// console.log(map.get(''));

// function washingMachineTime(){
//     console.log("Run machine!");
// }

// setTimeout(()=>{
//     washingMachineTime();
// } ,5000)

// function waitfor3sec(resolve){
//     // console.log(resolve());
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log('this is main!');
// }

// waitfor3sec(main);




// function second(){
//     console.log('second!')
// }

// function third(){
//     console.log('third!')
// }


// => PROMISESSSS

// function random(raman){
//     setTimeout(() => {
//         raman();
//         console.log("Something Happeing here for 3 sec then Promise will be resolved!");
//     }, 3000);;
// }

// let p = new Promise(random);

// function callback(){
//     console.log('callback complete!');
// }

// p.then(callback);


// class myPromise{

//     p = 'pending';
//     callbacks = [];

//     constructor(resolve){
        
//     }

//     then(proceed){
//         if(this.p =='resolved'){
//             proceed();
//         }
//         else{
//             return console.error('promise not fulfilled');
//         }
//     }
// }

// let p = new myPromise(random, second, third);

// function second(){
//     console.log('second!');
// }
// function random(){
//     console.log('random!');
// }
// function third(){
//     console.log('third!');
// }


// p.then(second);


// const fs = require('fs');

// function print(err, data){
//     console.log(data);
// }

// function cleanFile(){
//     fs.readFile('a.txt','utf-8',print);

// }

// cleanFile();



// function readTheFile(resolve){
//     // read the file and whenever the final value is found or created or got,
//     // call resolce().

// }


// async function readFile(file){
//     //read the file
//     return new Promise(readTheFile);
// }

// const p = readFile("a.txt");

// function callback(contents){
//     console.log(contents);
// }

// p.then(callback);


// function wait(n){
//     const p = new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('resolved');
//             resolve();
//         },3000);
//     });
//     return p;
// }

// function callback(){
//     console.log('this is callback!')
// }

// wait(2).then(callback);




/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


// function resolver(resolve, n){
//     console.log(n);
//     resolve()
// }

// function halt(n){
//     return new Promise((resolve)=>{
//         resolver(resolve, n);
//     });
// }

// function callback(){
//     console.log('.then working!');
// }

// halt(10).then(callback);

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// function random(raman){
//     setTimeout(() => {
//         raman();
//         console.log("Something Happeing here for 3 sec then Promise will be resolved!");
//     }, 3000);;
// }

// let p = new Promise(random);

// function callback(){
//     console.log('callback complete!');
// }

// p.then(callback);

// let d = new Date();

// let current = d.getTime();

// const hold = d.getTime()+1

// console.log(hold-current);




// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve, duration);
//     });
// }

// function callback(){
//     console.log('this is a callback');
// }

// setTimeoutPromisified(1000).then(callback);




// function resolveTime(resolve, time){
//     setTimeout(()=>{
//         console.log('resolved');
//         resolve();
//     } ,time);
// }


// function setTimeooutPromisified(time){
//     return new Promise((resolve)=>{
//         resolveTime(resolve, time);
//     });
// }

// function callback(){
//     console.log('callback called!')
// }

// setTimeooutPromisified(3000)
//     .then(setTimeooutPromisified(1000))
//     .then(setTimeooutPromisified(2000))
//     .then(callback);

// setTimeout(() => console.log("timeout"), 1000);

// Promise.resolve().then(() => {
//     setTimeout(()=>{
//         console.log('promise');
//     },1000)
// });

// console.log("sync");


// async function test() {
//     console.log("1");
    
//     await Promise.resolve();

//     console.log("2");

//     await Promise.resolve();

//     console.log("3");
// }

// console.log("start");

// test();

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("promise");
// });

// console.log("end");


// const fs = require('fs');

// const fs = require('fs');

// function FileReaderAsync(){
//     return new Promise(function(resolve, reject){
//     fs.readFile('a.txt','utf-8', (err,data)=>{
//         if(err){
//             reject(err);
//         }
//         else resolve(data);
//     })
// })
// }

// function callback(data){
//     console.log("Reading the file!");
//     console.log(data);
// }

// FileReaderAsync().then((data)=>{
//     console.log(data);
//     return data;
// }).then(callback)
// .catch((err)=>{
//     console.log("Error Reading the File: ", err);
// });




const todo = ['ishan','chaudhary'];
console.log(todo);

console.log(todo[0]);
console.log(todo[1]);
