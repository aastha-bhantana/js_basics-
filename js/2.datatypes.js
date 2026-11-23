//* data types

//? primitives
//* number 
let a = 12;
let b = 12.34;

//* string
//? single quotes ''
let c = 'single quotes';

//? double quotes ""
let d ="double quotes ${2+2}";

//? template literals -> backticks-> `` (long string, multi-line string, interpolation)
let e = `backticks ${2+2}`;
console.log(d);
console.log(e);

let userName = "Ram";
const greetMessage = `hello ${userName}`;
console.log(greetMessage);
console.log(e);

let firstName = 'Ram';
let lastName = "Adhikari";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//* boolean
let isAdmin = true;
let isUser = false;

//* undefined
let f = undefined; //varaible declared but not initialized js used as undefined internally
let g; //undefined
console .log(f);
console.log(g);

//* null
let h = null;  //varaible declared but not initialized js used as null internally
console.log(h); 

//* bigint
console.log(Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
const bigint = BigInt(34);
const num1 = 9007199254740993n; //usee for big integer values
console.log(num1 +1n);
console.log(num1+2n);
console.log(num1+3n);
console.log(num1+30n);
console.log(bigint);

console.log();

//* symbol
console.log("id" === "id");
const sym = Symbol("id");
const sym2 = Symbol("id");
console.log(sym.description);
console.log(sym === sym2); 

//?non primitives
//* object

//* array
//* function 