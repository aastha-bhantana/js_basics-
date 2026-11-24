//* control flow :order
//* control statements :

// console.log("start");
//     console.log("A");
//     console.log("B");

//? 1.conditionals
const age = 17;
//* if --- single task
// if(age >=18){
//     console.log("can vote");
// }
  
//* if-else ---binary task
 if(age >=18){
     console.log("can vote");
 }else{
    console.log("can not vote")
 }


//* else-if ladder 
let score = 90;
//if ->score >=80 -> A+
//else if -> score >=70 -> A
//else if -> score >=60 -> B+
//else if -> score >=50 -> B
//else if -> score >=40 -> C+
//else if -> score >=30 -> C
//else -> fail 
if(score >= 80){
    console.log("A+");
}else if (score >= 70){
    console.log("A");
}else if (score >= 60){
    console.log("B+");
}else if (score >= 50){
    console.log("B");
}else if (score >= 40){
    console.log("C+");
}else if (score >= 30){
    console.log("C");
}else {
    console.log("Fail");
}

//* switch-case -- yeuta varaible ko value ma switch garnu cha bhaye
let day = 5
switch(day){

    case 1:{
        console.log("sunday"); 
        break;   
    }
    case 2:{
        console.log("monday");
        break;    
    }
    case 3:{
        console.log("tuesday");
        break;   
    }
    case 4:{
        console.log("wednesday");
        break;    
    }
    case 5:{
        console.log("thursday");
        break;    
    }
    case 6:{
        console.log("friday");
        break;    
    }
    default :{
        console.log('enter day between 1-6');
    }
}


// let day1 = 5;

// switch (day1) {
//     case 1:
//     case 7:{
//         console.log("Weekend");
//         break;
//     }
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:{
//         console.log("Working day");
//         break;
//     }
//     default:
//         console.log("Enter day between 1-7");
// }
// 1,6 -> weekend 
// 2-6 -> working days

//? 2.loop
//* do-while
// let i = 0;
// do{
//     //body
//     console.log(i);
//     i++;
//     }while(i <= 10);

//     i = 100;

//* while
// console.log("----while----")
// let j = 0;
// while(j<=10){
//     console.log(j);
//     j++;
// }

//*for loop
// for(let i =0; i <= 10; i++){
//     console.log(i);

// }
//* for -of   //for-of is mainly used to get values from an array/string. VALU
// const numbers =[23,45,67,89];
// //for(let i = 0; i < numbers.length -1; i++){}
// // for(let i = 0; i < numbers.length ; i++){
// //     console.log(i,number[i]);
// // }

// for (let value of numbers){
//     console.log(value);
// }

// let userName = "John Doe";

// for(let value of userName){
//     console.log(value);
// }

// //* for -in   //for-in is mainly used for objects.  KEY

// let user ={
//     name: "john",
//     email:"john@gmail.com",
//     password:"1234543",
//     key:"aaaa"
// };

// for (let key in user){
//     console.log(key,user[key])
// }

// for(let value in userName){
//     console.log(value);
// }

// let userName1 = "John Doe";

// for(let value of userName){
//     console.log(value);
// }

//* jump keywords These are used to change the normal flow inside loops

//break
// for(let i =0; i<=10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

//continue  Skip this iteration and go to the next one
for(let i =0; i<=10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

// for(let i = 0; i <= 10; i++){

//     if(i % 2 == 0){
//         continue;
//     }

//     console.log(i);
// }

//return values
for(let i = 0; i <= 10; i++){

    if(i  == 0){
        return ;
    }

    console.log(i);
}

