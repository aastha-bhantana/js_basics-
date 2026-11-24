// const parent = () =>{
//     let x =10;
//     console.log(x);

// };

//* garbage Collection


const parent = () =>{
    let x =a;
    return () => {
        console.log(x);
    }
    

};
const inner =parent(10);  //{x:10}  // x is removed from memory after the function execution is completed
const inner1 = parent(20);
//inner is a closure which has access
//  to the variable x even after the parent function is executed and removed from memory
  

// main branch changes
console.log("This is main branch");
console.log("Main change E");