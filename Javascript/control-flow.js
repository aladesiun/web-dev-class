// CONTROL FLOW
// 1: conditional statement
// 2: switch statement
// 3: Loops

// CONDITONAL STATEMENT includes the if statement and switch
// == loose equality
// === strict equality
// ts is superset
// const age = 50;
// if ((age > 50 && (500 < 400))) {
//     console.log('yesssss');
// }else if(age == 50){
//     console.log('oo yesssss');
// }
// else{
//     console.log('noooooo');
// }

// else if (age <= 4) {
//     console.log('You are a juvenile');
// }
// else if (age == 3) {
//     console.log('You are a juvenile');
// }
// else if (age == 2) {
//     console.log('You are a juvenile');
// }
// else if (age == 1) {
//     console.log('You are a juvenile');
// }
// else if (age == 4) {
//     console.log('You are a juvenile');
// }else {
//     console.log('You are a teen');
// }


// 2: switch statement
// let day = 1;

// let switchResult;
// switch (day) {
//     case 1:
//         switchResult = "it is sunday";
//     case 2:
//         switchResult = "it is monday";
//     default:
//         switchResult = "it is default";
// }
// console.log(switchResult);



// console.log(switchResult);
// 3: Loops
//For loop, while loop, do while loop
// for loop
// for(initialization, condition, increement/decreement)
// let students = ['tolu', 'tope', 'temmy', 'mabel'];

// OOP
// object is a blueprint of class

let students = [
    {name: "tope", age:40, 
        secondObj:[
        {name: "tolu", age:42},
        {name: "tolu", age:42},
        {name: "tolu", age:42},
        {name: "tolu", age:42},
        {name: "tolu", age:42},
    ]},
    {name: "tolu", age:42},
    {name: "joy", age:20},
    {name: "mabel", age:13},
    {name: "segun", age:23},
]




const names= [
    'Aladesiun', "ellon", "musk", "mark", "radio"
]

let dfs = [
    {
        date: '2-2-2024',
        name: 'themmy'
    },
    {
        date: '2-2-2024',
        name: 'themmy'
    },
    {
        date: '2-2-2024',
        name: 'themmy'
    },
    {
        date: '2-2-2024',
        name: 'themmy'
    },
];


// // -- decrement, ++ increment
for(let tea = 0; tea <= students.length - 1; tea++){
    students[tea].name = names[tea];
}

// a = 5
let a = 0;
// while ( a < students.length) {
//     console.log("yes it is less");
//     a++;
// }

// do {
//     console.log("yes it is less");
//     a++;
// } while (a < students.length);

// console.log(
//     students.map((value)=>{})
// );

// console.log(
//     students.filter((student)=> student.age < 20)
// );

students.forEach((element)=>{
    // console.log(element.age);
});

function calNum(num1 , num2){
    return num1 + num2;
}

// console.log(calNum(1,5));
// console.log(calNum(600, 503));
// console.log(calNum(1000, -40));
// console.log(calNum(1,5));


// filter();
// forEach(element => {});


// while (condition) {
    
// }
// do {
    
// } while (condition);

// Functions and scope

// Object 
const mabel = { name: "segun", age: 23, d_amountt:400, debit_amt:400 };
const keys =Object.keys(mabel);
console.log(keys);
console.log(
    keys.map((key)=>mabel[key])
);

// DOM manipulation
// document.getElementsByClassName
document.getElementById
document.querySelector
document.querySelectorAll
// document.getElementsByClassName
