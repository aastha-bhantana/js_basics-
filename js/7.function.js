//function 
//function is  resuable of block code that performs a specific task

// 12 + 23

//fuction declaration

// function function_name(){
// function body
// }

//function call/invocation
//function_name()

//console.log("hello");
//let x =40;

// function greet(){
//     console.log("hello world")
// }
// greet();
// greet();
// greet();
// greet();

// function with input
//parameter and argument
// function greet(name){
//     console.log("hello",name);
// }
// greet("Ram"); 
// greet("john");

// default parameter
// function greet(name = "Guest"){
//     console.log("hello",name);
// }
// greet("Ram"); 
// greet(); 

// // add() -> x -> f(x) -> y
// function add(a=0, b=0){
//     // console.log (a + b);
//     const sum = a + b;
//     // console.log(sum);
//     return sum;
// }
// const a = add(2,3);
// console.log(a);
// const b = add(2, 56)
// console.log(b);
// let result = add(45, 67);
// console.log(result);


// function mul(t = 0, u = 0){

//     const mul = t * u;

//     return mul;
// }

// const result1 = mul(2, 3);
// console.log(result1);

// const result2 = mul(2, 56);
// console.log(result2);

// const result3 = mul(45, 67);
// console.log(result3);

// firstName:'', lastName:''
// getfullName (user) -> return fullname

// let user = {
//     firstName: "John",
//     lastName: "Doe"
// };
// function getFullName(user) {
//     return user.firstName + " " + user.lastName;
// }
// let fullName = getFullName(user);
// console.log(fullName);

// function getFullName(user){
//     return `${user.firstName} ${user.lastName}` ;
// }

// let user = ["John", "Doe"];

// function getFullName(user) {
//     return user[0] + " " + user[1];
// }

// let fullName = getFullName(user);

// console.log(fullName);

//* totalSum(numbers=[]) => sum each element -> return total sum
// [1,2,3] => totalSum([1,2,3]) => return 6

function totalSum(numbers = []) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++) {
        sum= sum+numbers[i];
    }
    return sum;
}
let result = totalSum([1, 2, 3]);
console.log(result);


//function expression
const subtract = function (a, b){
   return a - b ;
};

console.log(subtract(12, 34));

const sum = function (c,d){
    return c + d;
};

console.log(sum(23,67));




const multiplication = function (e,f){
    return e * f;
};

console.log(multiplication(14,7));



const division = function (g,h){
    return g / h;
};

console.log(division(10,5));

//arrow function 

// const div =(a,b) => {
//     const res = a / b;
//     return res;
// };

//  const div =(a,b) => {
// //     return  = a / b;
//  }

const div =(a,b) => a / b;
console.log(div(10,2));


//isEven(num)=> true/false
// function isEven(num) {
//     return num %2===0;
// }
// let result1 = isEven(10);
// console.log(result1);


const isEven = (num) => num %2==0;
console.log(isEven(11));


// todo: rest parameter -> ... //A rest parameter allows a function to accept any number of arguments and collect them into an array

// const sum1 = (a=0,b=0) => {
//     return a + b;

// };
// const sum1 = (...numbers) => {
//     console.log(numbers);
//     let sum = 0;
//     if(numbers.length ===0){
//         return 0;
//     }
//     for(let number of numbers){
//         sum += numbers;
//     }
//     return sum;

// };
// console.log(sum(12,3));
// console.log(sum(12));
// console.log(sum());
// console.log(sum(1,3,5));
// console.log(sum(1,3,5,34));
// console.log(sum(1,30,5,34,45,6,78));

//* callback function
const parent = (callback) => {
  console.log("type of callback", typeof callback);
  console.log("Parent");
  const res = callback(12, 3);
  console.log(res);
  // child(12,3)
};

const child = (a, b) => {
  console.log("child", a, b);
  return a + b;
};

const callback = (a, b) => {
  console.log("callback", a, b);
  return a + b;
};
// let x = 34;
// add(x); //
// add(34);
console.log("-------------------");
parent(child); //
console.log("-------------------");
// parent(callback()); //
parent(callback);
console.log("-------------------");
parent(() => {
  console.log("arrow function");
});
console.log("-------------------");

parent(() => {});
console.log("-------------------");

parent(function (x, y) {
  console.log("function syntax", x, y);
  return x + y;
});
// parent(2 + 3);

// calculate(x,y,operation)
// add = (x,y) => {clg('')}
// calculate(12,3,add)  => add(12,3) => 15

// function processNumber(num, callback) {
//     return callback(num);
// }
// const double = function(n) {
//     return n * 2;
// };
// const triple = function(n) {
//     return n * 3;
// };
// console.log(processNumber(5, double));
// console.log(processNumber(5, triple));

// calculateTotal(price, callback)
// //festiveDiscount(price) => price - 15%
// //studentDiscount(price) => price - 10%

// const calculateTotal = (price, callback) => {
//     console.log("type of callback", typeof callback);
//    const result = callback(price);
//    return result;
// };
// const festiveDiscount = (price) => {
//     return price - (price*15/100);
// };
// const studentDiscount = (price) => {
//     return price - (price*10/100);
// };
// console.log(calculateTotal(1000, festiveDiscount));
// console.log(calculateTotal(1000, studentDiscount));

// const calculateTotal = (price, callback) => {
//     const result = callback(price);
//     return result;
// };
// const festiveDiscount = (price) => {
//     return price - (price * 15 / 100);
// };
// const studentDiscount = (price) => {
//     return price - (price * 10 / 100);
// };
// console.log(calculateTotal(100, festiveDiscount));
// console.log(calculateTotal(100, studentDiscount));

// totalprice (unit-price , quantity , callback )- total price

// const calculateTotal = (unitPrice, quantity, callback) => {
//     const result = callback(unitPrice, quantity);
//     return result;
// };
// const calculatePrice = (unitPrice, quantity) => {
//     return unitPrice * quantity;
// };
// console.log(calculateTotal(20, 5, calculatePrice)); // 100

//higher order function


// const outer = () =>{
//     console.log("outer");
//     const inner = () => {
//         console.log("inner");
//         return 123;
//     };
//     return inner;
// };
// const a = outer();
// //console.log(outer()); //
// // outer();
// console.log(a);
// a();

//* function factory
const add = (num1) => {
    const inner = (num2) => {
        return num1 + num2;
};
return inner;
};
const add5 = add(5);
const add10 = add(10);

console.log(add5(10));
console.log(add5(20));
console.log(add10(20));

// const add1 = (num1) =>  (num2) => num1 +num2;
// const add15 = add(15);
// console.log(add15(15));

//* IIFE -> immediately invoked function expression

(() => { 
    console.log("IIFE");
})();

(function (a){
    console.log("IIFE",a);
})(12);

(() => {
    console.log("IIFE123");
})();

//* recursive function
//fib n => 1-n => sum
//5! => 5 *4*3*3

const factorial = (n) => {
    if (n === 0) return 1;
    
   return n * factorial(n - 1);
};
console.log(factorial(5)); // 120

//todo : generator function
// function* counter(){
//     console.log("A");
//     yield 0;
//     console.log("B");
//     yield 1;
//     console.log("C");
//     yield 2;
//     console.log("D");
//     yield 3;
//     console.log("E");
//     yield 4;
//     console.log("F");

// }
// const counterRef = counter();

// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());

// function* counter() {
//     let i = 0;
//     while (true) {
//         yield i;
//         i++;
//     }
// }
// const counterRef = counter();
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());

// function* counter() {
//     for (let i = 0; i < Infinity; i++) {
//         yield i;
//     }
// }
// const counterRef = counter();

// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());
// console.log(counterRef.next());


// function* infiniteCounter(){
//     let count = 0;
//     while(true){
//         yeild  ++count;
//     }
// }
// const 


//?function(seconds)=> HH:MM:SS ->
//?122 -> 00:02:02

//*padStart()
// let x=1
// console.log(x.toString().padStart(3,"0"));

// const formatTime = (seconds)=>{
//     //? total hours
//     let hours = (seconds / 3600).toFixed(0);
//     //? total minutes from remaining seconds
//     let minutes = (minutes / )
//     //? remaining seconds
    
//     let result = `00:02:02`;
    
//     return result;
// };
// console.log(formatTime(125));


// let x = 1;
// console.log(x.toString().padStart(3, "0"));

// const formatTime = (seconds) => {

//     let hours = parseInt(seconds / 3600);
//     let remainingSeconds = seconds % 3600;
//     let minutes = parseInt(remainingSeconds / 60);
//     let secondsLeft = remainingSeconds % 60;

//     hours = hours.toString().padStart(2, "0");
//     minutes = minutes.toString().padStart(2, "0");
//     secondsLeft = secondsLeft.toString().padStart(2, "0");

//     let result = `${hours}:${minutes}:${secondsLeft}`;
//     return result;
// };
// console.log(formatTime(122));

// let x1 = 2;
// console.log(x.toString().padStart(3,"0"));

// change sec into time

//? function(seconds) => HH:MM:SS
//? 122 -> 00:02:02

//* padStart()
let x = 1;
console.log(x.toString().padStart(3, "0"));
const formatTime = (seconds) => {
    //? total hours
    let hours = Math.floor(seconds / 3600);
    //? total minutes from remaining seconds
    let remainingSeconds = seconds % 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    //? remaining seconds
    let secondsLeft = remainingSeconds % 60;

    let result = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;

    return result;
};
console.log(formatTime(122));
