//* 
//var,  let, const


//* data types
//? number
let c: number = 23;
//? string
let d: string = "";
//? boolean
let e: boolean = true;
//? undefined
let f: undefined= undefined;
//? null
let g: null = null;


//? array 
//? object
//? function

//* extra 

//? any
// let any_type: any;
// any_type = "any type";
// any_type = 45;
// console.log(any_type.toUppercase()); //

// //? unknown
// let unknown_type: unknown;
// unknown_type = "unknown type";
// unknown_type = 345; 


// if(typeof unknown_type === "string"){
// console.log(unknown_type.toUpperCase());
// }

//? void 
//? never

// //? type inference
// let a = 12;

// a = 100;
// // a = "hello"; //? type "string" is not assignable to type "number".  

// // type annotation 
// let b: string ;

// b = "hello";
// // b = 45;  //! Type 'number' is not assignable to type 'strange'.


// //* array 
// let numbers: number[] = [12,34,65,6]; 

// // numbers.push("12");
// numbers.push(21);


// //string type array 
// // let fruits: string[] = ["Apple", "kiwi"];

// let friuts: Array<string> = ["Apple","kiwi"];  //let fruits: string[]


// //*object
// let user:
// {
//     readonly id: number;
//     name: string;
//     email: string;
//     password:string;
//     phone?: string; //optional property
    
// }={
//     id:1,
//     name: "john",
//     email: "john@gmail.com",
//     password:"12345",
    
// };

// user.phone = "";
// user.name = "";
// // user.id = 12;

// //? user = [{name,email},{}]
// // // let users:{name:string; email: string; password: string}[] = [
// //     {name:'john', email: "john@gmail.com", password:"1234"},
// //     {name:"alice", email:"alice@gmail.com", password:"3456"},
// // ];
// //* type alias
// type TUser = {
//     readonly id : number;
//     name: string;
//     email: string;
//     password: string;
//     phone? : string; //!optional property
// }
// let user1:TUser = {
//     id:1,
//     name: "john",
//     email: "john@gmail.com",
//     password:"123412125",
    
// };
// let user2:TUser = {
//     id:2,
//     name: "john",
//     email: "john@gmail.com",
//     password:"123412125",
    
// };

// let users: TUser[] =[
//     {id:1, name:"john", email: "john@gmail.com", password:"1234"},
//     {id:2, name:"alice", email:"alice@gmail.com", password:"3456"},
// ];

//* intersection / union
type TA = {
    a: string;
};
type TB = {
    b: string;
}
// type TA_B= {
//     a: string;
//     b: string;
// };
let h: TA = {
    a: "",
};
let i: TB ={
    b:"",
};
//! intersection &
// type TA_B = {
//     a:"",
//     b:"",
// };
type TA_B = TA & TB;

let j: TA & TB = {
    a:"",
    b:"",
};

//login 
type TLogin = {
    email: string;
    password: string;
};

//register 
// type TRegister = {
//     email: string;
//     password: string;
//     full_name : string;
//     confirm_password: string;
// }

type TRegister = TLogin & {
    full_name: string;
    confirm_password: string;
};

//! union -> | => or
let l: TA | TB ={
    a:"",
    b:"",
};

type ID = number | string;
let id: ID = 12;
id = "";
//id = true;

//* function 
function add (a: number,b: number):number{
   return a + b;
}

console.log(add(12,4));
console.log(add(34,24));
console.log(add(12,1));
// console.log(add("",""));
// console.log(add([12],{}));


// const isEven = (num:number): boolean => num % 2 === 0;
// console.log(isEven(12));

// todo: interface

interface Iproduct{
readonly id: number;
name : string;
price : number;
description?: string;
} 
let product:Iproduct ={
    id:1,
    name:'',
    price:1000
}
//*interface


// to do : *difference: interface & type
//1.interface -> object structure only
//1. type -> can represent : object , primitive unions, function signature ....

//? 2. extending
//type -> intersection & union

interface IPerson{
    name:string;
    email: string;
}

interface IEmployee extends IPerson{
    emp_id: number;
    department: string;
}

//? 3. declaration merging 
interface IA {
    a: string;
}

interface IA{
    b:string;
}
let obj:IA ={
    a : '',
    b : '',
};

type A ={
    a: string;
};
// type A = {   // duplicate identifiers 'A'
//     b: string;
// };

//* class
class Person{
    // public name : string;
    // protected email: string;
    // private password: string;

    constructor(public name: string, protected email:string, private password:string){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    introduce(): string{
        return `My name is ${this.name}`;
    }
}
const john = new Person("john", "john@gmail.com", "123456" );
john.introduce();


//* literal types 
type TServerRes =  "success" | "error" | "fail";
let responseStatus: TServerRes;
responseStatus = "success";
responseStatus = "fail";
responseStatus = "success";

type OrderStatus = "pending" | "confirmed" | "shipped" |"delivered" ;
let orderStatus: OrderStatus;
orderStatus = "shipped";


//* generic type

function identity<T>(value:T): T{
    return value;
   
}

console.log(identity<number>(100));
console.log(identity<string>("Hello").toUpperCase());



type IBox<T>={
    value: T;

};

const strBox: IBox<string> ={
    value: "str box",
};

const numBox: IBox<number> = {
    value:12,
}
const numObj : IBox<{x: number; y: number }> = {
    value : {
        x: 12,
        y: 20,
    },
};

















