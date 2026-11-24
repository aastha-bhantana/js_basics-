// console.log("start");
//console.log("processing...");
//console.log("End");

//! async
//*SetTimeout( callback,timeout);
console.log("start");

const timer_id = setTimeout(
    (x,y,z) => {
        console.log("processing",x,y,z);
    },
    2000,
    "x100",
    10,
    100,
);

// console.log(timer_id);
//clearTimeout(timer_id);
//console.log(timer_id);

console.log("End");
