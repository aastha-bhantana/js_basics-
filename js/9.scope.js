//* scope  let and const -> block scope / var -> gobal but if function body vitra bhaye function scope
//! gobal scope
var global_var = "global bar";
let global_let = "global let";
const global_const = "global const"; 

// console.log(global_const,global_let,global_var);

//! block scope
if(true){
    console.log("----block-----");
    // console.log(global_const, global_let, global_var);
    var block_var = "block var";
    let block_let = "block let";
    const block_const = "block const";
    console.log(block_const, block_let, block_var);
}
// console.log(block_let); // reference error: block_let is not defined
// console.log(blocks_const); // reference error: block_const is not defined
console.log(block_var);

//! function scope
function scope(){
    console.log("----function-----");
    // console.log(block_var);
     var function_var = "function var";
    let function_let = "function let";
    const function_const = "function const";
}
scope();
// console.log(function_const); // not define
// //  console.log(function_let); // not defined
// console.log(function_var); // not defined

//! lexical scope // nested scope//scope birta arko scope parent cannot child can
// function parent(){
//     let x = "parent";
//     function child(){
//         let y="child";
//         console.log(x);
//         console.log("y");
//     }
//     // console.log(y); // Reference y is not defined
//     child();
// }
// parent();

// let y =120;
// console.log(y);

// if(true){
//     // let x=10;
//     let y =100;
//     if(true) {
       
//         // console.log(x);
//         console.log(y);
//         // x=123;
//         y=500;
//         console.log(y);
//          y=450;
//     }
//     // console.log(x);
//     console.log(y);
    
// }
// console.log(y);

//*
//  scope chain //afu bhanda mathi khojcha input payena bhanye
let y ="global";
function parent(){
    // let y = "parent";
    console.log(y);
    function child(){
        let y="child";
        // console.log(x);
        console.log(y);
    }
   
    child();
}
parent();


//! module scope


