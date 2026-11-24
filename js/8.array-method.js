//array method 
// forEach, map,filter,reduce,every,some...


const number =[12,34,76,5];
// const doubled = []
//* forEach  dont not return
// //loop
// //arr_name.forEach(callback)
// const callback = (value,index,array) =>{
//  console.log("callback",value, index, array);
// };

// number.forEach(callback);

// console.log(number);
number.forEach((v, i) => {
    console.log("callback 1", v, i);
    // console.log(v * 2);
    // // number[i] = v * 2;
    // doubled[i] = v * 2;
    // return v * 2;
});
// console.log("result",number,doubled); 

//* map ()-> transformation 
//x -> 2xx , {} => ''
// return new array

const doubled = number.map((v) => {
    console.log(v);
    return v *2;
    // return "x";
});
console.log(number);
console.log(doubled);

//
let users =[
    {
        id: 1,
        name : "john doe",
        email : "john@gmail.com",
        
    },
     {
        id: 1,
        name : "Ram karki",
        email : "ram@gmail.com",
        
    },
     {
        id: 3,
        name : "Hari karki",
        email : "hari@gmail.com"
        
    },
];
const names = users.map((user) => {
    return user.name;
});
console.log(names);



// users-> name ['john doe', 'ram karki', 'hari karki']

//
// let students =[
//     {
//         id: 1,
//         name : "john doe",
//         email : "john@gmail.com",
//         marks : [45,67,87,90,56],
//     },
//      {
//         id: 1,
//         name : "Ram karki",
//         email : "ram@gmail.com",
//         marks: [65, 67, 87, 40, 56],
        
//     },
//      {
//         id: 3,
//         name : "Hari karki",
//         email : "hari@gmail.com",
//         marks : [34, 67 , 87, 56, 28],
        
//     },
// ];
// let result = [];
// for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     let sum = 0;
//     for (let j = 0; j < student.marks.length; j++) {
//         sum += student.marks[j];
//     }
//     let avg = sum / student.marks.length;
    
//     result.push({
//         ...student,
//         avg_marks: avg
//     });
// }

// const result1 = students.map((student) => {
//     const total = student.marks.reduce((sum, mark) => sum + mark, 0);
//     const avg = total / student.marks.length;
//     return {
//         ...student,
//         avg_marks: avg
//     };
// });
// console.log(result1);
// {name,email,marks:[]} => {name,email,marks, avg_marks: }

//* Filter 
//* array_name.filter(callback)   return is boolean 

// const numbers = [12,34,76,5,33];
// const even = numbers.filter((num, i) =>{
//     if (num % 2===0){
//         return num;
//     }
//     else{
//         return null;
//     }
// });
// console.log(even);

// const numbers = [12, 31, 34, 76, 5];

// // 3, -0 -> falsye value

// const even = numbers.filter((num, i) => {
//     // if (num % 2 === 0) {
//     //     return true;   //i is the index of the element, not the number itself
//     // } else{
//     //     return false;
//     // }
//     return num % 2 === 0;
// });

// console.log(even);

const numbers = [12, 31, 34, 76, 5];

const odd = numbers.filter((num, i) => {
    return num % 2 !== 0;
});

console.log(odd);

//student.avg  >= 50

let students =[
    {
        id: 1,
        name : "john doe",
        email : "john@gmail.com",
        marks : [45,67,87,90,56],
    },
     {
        id: 2,
        name : "Ram karki",
        email : "ram@gmail.com",
        marks: [65, 67, 87, 40, 56],
        
    },
     {
        id: 3,
        name : "Hari karki",
        email : "hari@gmail.com",
        marks : [34, 57 , 7, 46, 28],
        
    },
];
const passedStudents = students.filter((student) => {
    let total = 0;
    for (let mark of student.marks) {
        total += mark;
    }
    student.avg = total / student.marks.length;
    return student.avg >= 50;
});
console.log(passedStudents);

//* reduce 
// ? -> arr_name.reduce(callback)
// Marks ko total calculate garcha

const numbe =[12,31,34,76,5]
//12
//12+31=43
//43+34=77

const totalSum = numbe.reduce((prev , num)=>{
    return prev + num;
},0);
console.log(totalSum);

const cart = {
    userid: 1,
    items:[
        {
            product: {
                id : 1,
                price : 300,
            },
            quantity : 2,
        },
        {
            product: {
                id : 2,
                price : 500,
            },
            quantity : 3,
        },
        {
            product: {
                id : 3,
                price : 1000,
            },
            quantity : 2,
        },

    ],
    
};

const totalamt = cart.items.reduce((total,item)=>{
    return total + item.product.price * item.quantity;
},0);
console.log(totalamt);
// total amt kati cha item 

// todo : every , sum , find ,findindex

const isEveryEven = number.every((num)=> num % 2 === 0 );
console.log(isEveryEven);
const isSomeEven = number.some((num) => num % 2 === 0);
console.log(isSomeEven);

//find 
const res = number.find((num) => num %2 ==0);
console.log(res);

const user = students.find((student) => student.email === "ram@gmail.com");
const index = students.findIndex(
    (student) => student.email === "sam@gmail.com",
);
console.log(user);
console.log(index);

if(!user){
    console.log("user not found");
}
if(index === -1){
    console.log("user index not found");
};

