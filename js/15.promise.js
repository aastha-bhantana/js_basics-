// // //promise 
// // //Promise -> Object represents eventual completion or faliure of a async task

// // //* creating promise 
// // //? constructor 

// // //* states/status
// // //? pending
// // //? fulfilled
// // //? rejected

// // const promise = new Promise((resolve,reject)=>{
// //     //async task
// //     setTimeout(()=>{
        
// //         // resolve("promise resolved");
// //         reject("promise rejected");
// //     },2000);
// // });

// // console.log(promise);

// // //! handling promise
// // promise
// // .then((data) => {
// //     console.log("sucess");
// //     console.log(data);
// // })
// //    .catch((error) => {
// //     console.log("error");
// //     console.log(error);
// //     //console.log("task comleted");
// // });
// // console.log("end");

// // //* 
// const fetchUser = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const isError = true;

//             if(!isError){
//                 resolve({
//                     message: "user fetched",
//                     data: {
//                         id: 1,
//                         name: "John Doe",
//                         email: "john.doe@example.com"
//                     },
//                 });
//             }else{
//                 reject({
//                     message: "user fetched failed",
//                     data: null,
//                 });
//             }
//         },3000);
//     });
          
// };

// // //! handling promise
//  fetchUser()
//  .then((data) => {
//     console.log(data);
//  })
//  .catch((error) => {
//     console.error(error);
//  });

//  const fetchPosts = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const isError = true;

//             if(!isError){
//                 resolve({
//                     message: "user fetched",
//                     data:[ 
//                     {
//                         id: 1,
//                         title: "Post 1",
//                         userId: 1,
//                     },
//                     {
//                         id: 2,
//                         title: "Post 2",
//                         userId: 10,
//                     }
//                 ],
//                 });
//             }else{
//                 reject({
//                     message: "user fetched failed",
//                     data: null,
//                 });
//             }
//         },2000);
//     });
          
// };

// fetchPosts(110)
// .then((data) => {
//     console.log(data);
//  })
//  .catch((error) => {
//     console.error(error);
//  });


//  //! promise chaining
//  fetchUser()
//  .then((data) => {
//     console.log(data);
//     return fetchPosts(data.data.id);
//  })
//  .then((posts) =>{
//     console.log(posts);
//     // return fetchPosts(12);
//  })
//  // .then ()
//  .catch((error)=>{
//  console.log(error);
//  });


//fetch api
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((respond)=>{
//     console.log(response);
// })
// .catch((error){
//     console.log(error);
// })
// .catch((error) => {
//     console.log(error);
// });

//* async function

// const getUsers = () =>{
//     console.log("user");
// };

// getUsers();

//async function
//*sdync/await
//! try/catch block -> error handling


//  const getData= async () =>{
//    try{
//      console.log("fetch data");
//     const user = await fetchUser();
//     console.log(user);
//     const posts = await fetchPosts(user.data_id);
//     console.log(posts);
//    }catch(error){
//     console.log("catch");
//     console.log(error);
//    } finally {
//     console.log("finally");
//    }
// };

// getData();

// console.log("end");

//! try/catch - async/await
const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
};
getUsers(); 





