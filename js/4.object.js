//* object
// let userName ="";
// let userEmail ="";
// let userPassword ="";

//* new keyword / object constructor 
const obj = new Object();

//* object literal -> {}
let user = {
    //key:value
    id:1,
    name: "John Doe",
    email: "john@gmail.com", 
    password: "1234567654",
    key: "keyvalue",
    
};

//* accessing object properties
const userName = user.name;
console.log(userName);
console.log(user.password);
console.log(user.abc); //?undefined

//? bracket notation -> []
console.log(user["email"]); //user.email

//space in key
//console.log(user.full name)
console.log(user["full name"]);

//* dynamic key 
let key ="name";
let key1 = "email";
key = "password";
// 
console.log(user.key); 
console.log(user[key]); 
console.log(user[key1]);

console.log(user);

//* adding new properties
//dot notation 
//user.phone = "9860960647";

let phone = "phone_num";
//bracket
//user[phone] = "9860960647";
//console.log(user);


//* modify 
//user.name ="Ram Adhikari";
//user["email"] = "ram@gmail.com";

//* delete
//delete user.phone_number;
//console.log(user);

//console.log(user.hasOwnProperty("full_name"));
//todo destructuring , rest operator , spread operator

//destructing 

//let u = {
    //id: 1,
    //name: "John Doe",
    //email: "john@gmail.com",
    //password: "1234567654",
  //  key: "keyvalue",
//};

//let u1 = {
  //  id: 2,
   // name: "amina",
   // email: "amina@gmail.com",
    //password: "1234567654",
    //key: "keyvalue",
//};

//let { name, email, password, id } = u;
//let name ="abc";
//console.log(u.key);

//let { name: u_name, email: u_email, password: u_password, id: u_id } = u1;

//console.log(email, name, password);
//console.log(u_email,u_name, password);

//let number = [12,34,5,67];
//let[a, b, c] = number;
//console.log(a,b,c);

//* rest operator 
//...

//let {name,email, ...rest}=u;
//console.log(name);
//console.log(rest);

//const [x, y, ...z] = number;
//console.log(z);

// * spread operator
//... 
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 ={
 
    c:3,
    d:4,
};

let o = {
    ...obj1,
    ...obj2,
};
console.log(o);

console.log(obj1);


let num = [45,67,90];
let number = [12,34,5,67,...num];
console.log(number);
const new_arr =[...number, ...num];
//console.log(number.concat(num));
console.log(new_arr);

let u= {
    
    id:1,
    name: "John Doe",
    email: "john@gmail.com", 
    password: "1234567654",
    
    
};

//array of values
const values = Object.values(u);
console.log(values);

//keys
const keys = Object.keys(u);
console.log(keys);

//[[_id,1],[name,'john doe],[]]
const entries = Object.entries(u);
console.log(entries);

const e =[
    ["id",1], 
    ["name", "John Doe"],
    ["email", "john@gmail.com"], 
    ["password", "1234567654"],
];
const o1= {
    
    id:1,
    name: "John Doe",
    email: "john@gmail.com", 
    password: "1234567654",    
};

console.log(e[0][1]);
console.log(e[1][1]);

console.log(o1._id);
console.log(o1.name);








