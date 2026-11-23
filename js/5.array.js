//* array -> List
// property -> element
//key -> index start from 0 
//* numbered indexed -> [start from 0]
//1-10 , num1 - num10 ->
//let use1 = {};

//let use2 ={};

//! new keyword
//const arr = new Array(12);

//! array literal
const number = [12, 34, 5, 4, 67, 56 ];

//console.log(arr, number);


//* accessing array element => []
    const fEle = number[0];
    console.log(fEle);
    ///console.log(number[5]);
    console.log(number);

//* length
const len = number.length;
//console.log(len);
//console.log(number[number.length - 1]);

//* adding new element
//! from end index 
//? push
// array_name.push() -> end

 const res = number.push(10, 30, 55);
 console.log(res);
//number.push(20);

//! from start index[0]
//! unshift => return length
number.unshift(21, 43);


//* removing element 
//! from end index
//? pop()
//const last_ele = number.pop();
//console.log(last_ele);

//! from start
//? shift()
//console.log(number.shift());


//console.log(number);

//* at() 
//console.log(number.at(-3));
//+ve index -> left - right -> 0 ->
//-ve index -> right - left ->lastIndex ->

//console.log(number.at[-1]);
//console.log(number);


//* slice -> 
const slice = number.slice(1, 3);
console.log(slice);

//* splice -> 
//numbers.splice(start_index, delete_count, item1,item2,....itemn)

const res1 = number.splice(2,2,123,45,678);
console.log(res1);


//* concat
//console.log(number.concat([1,2,3,4,5]));

//* join
//console.log(number.join("*")); 

//* includes 
//* array.includes(element) -> return boolean

//console.log(number.includes(100));
//console.log(number.includes(10));

//* indexOf
//array.indexOf(ele) => return index : -1
console.log(number.indexOf(100));   //if num is extistence it will print the index if not syas -1
console.log(number.indexOf(10));

//* lastindexOf
console.log(number);
console.log(number.lastIndexOf(34)); //read the  repeated inserted num from last 
console.log(number.indexOf(34)); //read the insterted num from first

//* 
let users = [
    {
        _id: 1,
        name: "john doe",
        email: "john@gmail.com",
        password: "1234567654",
    },
    {
        _id: 2,
        name: "Alice doe",
        email: "alice@gmail.com",
        password: "1234567654",
    },

];
console.log(users[0].email);
