// // Hoisting is JavaScript's behavior of processing declarations before executing the code.
// // scope ko top ma inital garney

// // var a ;

// console.log(a); //undefined
// var a =10; 
// // a = 10;
// console.log(a); //10

// //* function declaration

// hoist();

// function hoist() {
//     console.log("hoist");
// }
// // hoist();

// //* let
// // console.log(b);
// let b = 20; 

// // console.log(c);
// const c = 40;

// //! TDZ -> Temporal Dead Zone 

// //* Function Expression
// // console.log(d);

// //d(); //
// // var d = 12;

// // console.log(hoistFunction); //undefined
// // hoistFunction(); //undefined()

// // var hoistFunction = function (){
// //     console.log("hoist function");
// // };

// hoistFunction();

// let hoistFunction = function (){
//     console.log("hoist function");
// };

// var is hoisted and initialized with undefined, so it can be accessed before its declaration. let and const are also hoisted,
//  but they are not initialized until their declaration is reached. Accessing them before 
// declaration causes a ReferenceError because they are in the Temporal Dead Zone (TDZ)

//*
//* phases of code execution
//? 1.memory creation phase
// {memory allocation}
//? 2.execution phase
//{ varaiable initialization ,parameter initialization , code execution}

console.log(a);
var a = 20;
console.log(a);

// console.log(b);

hoist();
function hoist(){
    console.log(b);
    let b = 12;
    console.log("hoist");
}
hoist();

//* callstack -> LIFO

//a 
//callstack

function a(){
    console.log("a");
    function b(){
        console.log("b");
        function c (){
            console.log("c");
        }
        c ();
    }
    b ();
}


a();  // fec-> MCP & EP
a(); //fec -> MCP & EP



// todo : execution context //environment in which JavaScript code is evaluated and executed

//* execution context

//* GEC ->  

//* FEC



//cs

