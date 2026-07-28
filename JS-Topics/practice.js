// words =["look", "kill","brush","look", "kill","brush"]
// res={};
// for(const word of words){
//     if(res[word]){
//         res[word] += 1;
//     }
//     else{
//         res[word] =1;
//     };
// };
// console.log(res);

// arr = [
//  {name:"A", dept:"IT"},
//  {name:"B", dept:"HR"},
//  {name:"C", dept:"IT"}
// ];
// res={};
// for(const item of arr){
//     if(res[item.dept]){
//         res[item.dept].push(item.name);
//     }
//     else{
//         res[item.dept] = [item.name];
//     }
// };
// const result = arr.reduce((acc,{name,dept})=>{
//     acc[dept] ??= [];
//     acc[dept].push(name);
//     return acc;
// },{});
// console.log(result);
// console.log(res);

// arr =[
//  {name:"A", salary:100},
//  {name:"B", salary:200},
//  {name:"C", salary:300}
// ]

// const result = arr.reduce((acc,{name,salary}) =>{
//     acc = acc + salary;
//     return acc;
// },0);
// console.log(result);

// obj = {
//  user:{
//    name:"Salman",
//    address:{
//       city:"Mumbai"
//    }
//  }
// }

// function flatten(obj,parentkey = "", result={}){
//     for(const key in obj){
//         const newkey = parentkey ? ` ${parentkey}.${key} ` : key;


//     if(typeof obj[key] === "object" && obj[key] !== null){
//         flatten(obj[key],newkey,result);
//     }
//     else{
//         result[newkey] = obj[key];
//     }
//     }
//     return result;

// };

// console.log(flatten(obj));

// obj = {
//  apple:3,
//  banana:2,
//  orange:1
// }


// const res = Object.entries(obj).map(([fruit,count])=>({
//     fruit,count
// }));
// console.log(res);

//Arrays

// indexOf includes


// console.log(fruits[1]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log("Fruit " + i + "is " + fruits[i]);
// }

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// for (let fruit of fruits) {
//   console.log(fruit);
// }

//recursive funtion

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let num1 = 6;
// let result = factorial(num1);
// console.log("The factorial of given number is :" + result);

// const sayHello = function (name = "Jaskirat") {
//   console.log(`Hello ${name}`);
// };

// function welocomeShow(callback) {
//   console.log("Welcome to the  Show Every one");
//   callback();
// }

// welocomeShow(sayHello);



//rest parameters

// function sum(...numbers) {
//   numbers.forEach((number) => {
//     console.log(number);
//   });
// }
// sum([1, 2, 3, 4]);

//default parameters:

// const add=function(a,b=20){
//   return a+b;
// }

// console.log(add(10))

//Arrow functions:

// const mul = () => {
//   console.log("multiplying a *b");
// };

// mul();

//fucntion expression

// const add=function(a,b){
//   return a+b;
// }

// console.log(add(10,20))

// function getTime() {
//   const count = 10;

//   count = count + 1;
//   console.log(count);
// }
// getTime();

//arrow fucntion as a callback and anonymous funtion as callback

// const add = () => {
//     return a + b;
// }

// console.log(10,20);

//closure
// function outer() {
//     let count = 0;

//     return function() {
//         count++;
//         console.log(count);
//     };
// }

// const increment = outer();

// increment();
// increment();
// increment();

// function createcounter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = createcounter();

// counter();
// counter();
// counter();
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");

console.log("Start");

const promise = new Promise((resolve) => {
    setTimeout(()=>{
        resolve();
    },2000);
})
console.log("Waiting..");
promise.then(() =>{
    console.log("Done");
});

