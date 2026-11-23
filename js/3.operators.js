//? operator
// arthimetic operators
// +,-,*,/,%,**,   / gives quotient where as % gives remandier
console.log(12+4);
let a = 23;
let b = 45;
console.log(a+b);
let sum = a +b;
console.log(sum);
console.log("hello" + "" + "world");
console.log(4 ** 4);

//* Assignement operators
//? =, +=, -=, *= ,  right side operator is assigned to left side variable
let x = 30;
x += 20; //x = x +20;
x -= 2; //x = x - 2;
console.log(x);


//* comparison op erator : returns boolean value
//? ==, ===, <, >, <=, >=, !=, !==
let c = 100;
let d = "100";

console.log(c == d); 
console.log(c === d); 

console.log(10>=11);

//* logical operator : RETURNS BOOLEAN VALUE
//? AND(&&), OR(||), NOT(!)
//truth table
// and -> dot
// or -> add

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);

//if (c < 100 && d === "100") {
 //   console.log("abc");}

//*if (c < 100 || d === "100") {
 //   console.log("abc");}

//if (c !== 100){
  //  console.log("c is not equal to 100");
//}

//* unary 
// increment
let e = 10;
//post
console.log(e++); // e += 1 //
e++;
console.log(e); 
//pre 
console.log(++e); 
console.log(e++); // 
console.log(++e);

// decrement
//post 
//pre

//ternary 
// condition ? exp_1 : exp_2
let age = 18;
let res = null;
if (age >= 18) {
   // console.log("can vote");
   res = "can vote";
}
else{
   // console.log("cannot vote");
   res = "cannot vote";
}
 const result = age >= 18 ? "can vote" : "cannot vote";
 console.log(result);

 //Bitwise operator
 console.log(2&1);
 console.log(4&1);
 console.log(5&1);

 // typeof operator
 let h=10;
 let i = "hello";
 let j = true;
 console.log(typeof h === "hello");
 console.log(typeof h);
 h = "string";
 console.log(typeof h);
 console.log(typeof i);
 console.log(typeof j);

 // diff -> undefined & not defined
//let f; //undefined
//console.log(f);

//console.log(g); //not defined 

//* type conversion
//explicit type conversion : Number(), String(), Boolean()
console.log(String(112));
console.log(Number("112"));
console.log(Number("hello")); //NaN
console.log(Boolean(112));
console.log(Boolean("abc"));


// implicit type conversion
// type coercion -> implicit type conversion 
console.log(10 + "23"); // 1023
console.log("30" - 15); // 15

//todo : truthy and falsy values
// falsy values : false, 0, "", null, undefined, NaN,-0
let age1 = 18;
if (age1){
    console.log(age1);
}
    



