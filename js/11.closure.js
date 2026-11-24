// //* clousre
// A closure is created when a function remembers and can access variables from its
//  outer scope even after the outer function has finished executing.
const parent = () => {
    const x = "parent var";

    const child = () =>{
        let y = "child var";
        console.log(x);
        console.log(y);
    };
    console.log("parent execution complete");
    return child; //returns the function itself, not the result of running the function
};
const a = parent();
// console.log(a);
a(); 

// * private variable
const Counter = () =>{
    let count = 0;

    const increment = () => {
        count ++;
        console.log(count);
    };

    return increment;
};
const counter = Counter();
const counter1 = Counter(); 
counter (); //1
counter1 (); //1
counter ();  //2
counter1 (); //2
counter (); //3


// const Counter = () => {
//     let count = 0;

//     const increment = () => {
//         count++;
        console.log(count);
//     };

//     const decrement = () => {
//         count--;
//         console.log(count);
//     };
//     return { increment, decrement };
// };

// const counter = Counter();

// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.decrement();

//* caching
const calculate = (number) =>{
    const cache = {};
    const child = (number) => {
        if (cache[number]){
            return cache[number];
        }
    
    console.log("calculating");
    for (let i = 0 ; i<=99999999; i++){
     
    }
    console.log("calculation complete");

    return (cache[number]= number * number);
    };
    return child;
};
const cacheFunction = calculate();
console.log(cacheFunction(2));
console.log(cacheFunction(2));
console.log(cacheFunction(3));
console.log(cacheFunction(2));
console.log(cacheFunction(3));
console.log(cacheFunction(2));
console.log(cacheFunction(3));

//todo: CreateAccount (acc_name , initial_amt )-> deposit(amt), withdraw(amt), blc_inq(), get_detail()

const CreateAccount = (acc_name, initial_amt = 1000) => {
  // let count = initial;
  let balance = initial_amt;
  let name = acc_name;

  const deposit = (amt) => {
    if (amt <= 0) {
      console.log("Invalid amount");
      return;
    }
    balance += amt;
    console.log(`Your new balance is: ${balance}`);
  };

  const withdraw = (amt) => {
    if (amt <= 0) {
      console.log("Invalid amount");
      return;
    }
    if (amt >= balance) {
      console.log("Insufficient balance");
      return;
    }
    balance -= amt;
    console.log(`Your new balance is: ${balance}`);
  };

  return {
    deposit,
    withdraw,
  };
};

const acc = CreateAccount("John Doe", 1000); // {}
const acc1 = CreateAccount("John Doe", 1000); // {}

acc.deposit(100);
acc.deposit(-1200);




