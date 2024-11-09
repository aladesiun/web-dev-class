// error handling 
// types of errors
// 1. syntax errors
// 2. runtime errors
// 3. logical errors
// runtime errors
// function addNum(){
//     return 2+5;
// }

// validation=> passed

// try {
//     // insert data in 
//     throw new Error("user already exist");
//     console.log(cal);
// } catch (error) {
//     console.log(error.message);
//     return "something went wrong"
// } finally{
//     console.log("this will run regardless of the error")
// }

// Asynchoronous Programming
// callback functions=>
// promises
// async/await

// async function  getCoke() {
//     let mySisErrand = await  "buy me a bottle of coke";
//     return "coke";
// }

// const Mabel = await getCoke();


const getUsers = ()=> {
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve("users")
        }else{
            reject("failed to get users")
        }
    })
}