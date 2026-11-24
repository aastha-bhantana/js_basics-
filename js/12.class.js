//* class
//?

// let user = {
//     name:'',
//     email:'',
//     password:'',

// };

// let user1 = {
//     name:"",
//     email:"",
//     password:"",
// };

class Person{
    name;
    email;
    #password; //private property

    constructor(userName, email, password){
        this.name = userName;
        this.email = email;
        this.#password = password;
    }
    getPassword(){
        return this.#password;
    }
}

// let user1 = {name:"", email:"", password:""};
let john = new Person("John Doe", "john@example.com", "123456");
let ram = new Person("Ram Adhikari", "ram@example.com", "123456");
console.log(john);
// console.loglog(john.#password); //undefined
console.log(ram);
console.log(john.getPassword()); 


//* Employee -> name email , password , department, salary => getpassword , getEmail
// class Employee{
//     name;
//     email;
//     #password;
//     department;
//     salary;

//     constructor(name, email, password, department, salary){
//         this.name = name;
//         this.email = email;
//         this.#password = password;
//         this.department = department;
//         this.salary = salary;
//     }
//     getPassword(){
//         return this.#password;
//     }
//     getEmail(){
//         return this.email;
//     }
// }
// let emp1 = new Employee("John Doe", "john@example.com", "123456", "IT", 50000);
// console.log(emp1);
// console.log(emp1.getPassword());
// console.log(emp1.getEmail());

//! inheritance
class Employee extends Person {
  department;
  #salary;
  constructor(name, email, password, department, salary) {
    super(name, email, password); // child to parent constructor call
    //new person();
    this.department = department;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
   
  introduce() {
    console.log("this is employee class");
  }

    // getPassword() {
    //   return this.#password;
    // }
}

const emp1 = new Employee("emp one", "emp1@gmail.com", "1234556", "HR", 15000);
console.log(emp1);
console.log(emp1.getPassword());

emp1.introduce();

//*  polymorphism  

//* abstraction 
class payment{
    pay(){
        console.log("implementation needed");
    }
}

//payment with khalti  
class PayWithKhalti extends payment{  
//initiate payment 
pay (amount){
    this.#connect();
    this.#successConnection();
    this.#authenticate();
    this.paymentStart();
    this.#paymentSucess(amount);
}
//connection
#connect(){
    console.log("connecting to khalti");
}
#successConnection(){
    console.log("connection successful");
}
#authenticate(){
    console.log("authenticating sucessful");
}
//start payment
paymentStart(){
    console.log("processing payment");
}
//completion status
#paymentSucess(amt){
    console.log(`Rs ${amt} payment successful`);
}
}
const khaltiPayment = new PayWithKhalti(); 
khaltiPayment.pay(1000);


//!getter and setter
class Circle{
    #radius;
    constructor(radius){
        this.#radius = radius;
    }
    get area(){
        return (Math.PI * this.#radius *this.#radius).toFixed(2);
    }

    //get perimeter -> 2 * pi * r
    

    set radius(r){
        this.#radius = r;
    }
}
const c1 = new Circle(10);
console.log(c1.area);
c1.radius = 12;
console.log(c1.area);


//! static 
// method it is used to create method that can be called without creating an instance of the class

//* calculator

//add,sub,div,mul,....
//10,2
//23,7

class Calculator{
     static add(a,b){
        console.log(a+b);
        return a + b;
    }
    static sub(a,b){
        console.log(a-b);
        return a - b;
    }
    static div(a,b){
        console.log(a/b);
        return a / b;
    }
}
// const calc = new calculator();
// calc.add()
Calculator.add(10,2); 
Calculator.add(123,71);


//* multiple inheritance it is not possible in js but we can achieve it using mixin
//A,B
//C
//* multilevel inheritance 
// A->B->C->D 

