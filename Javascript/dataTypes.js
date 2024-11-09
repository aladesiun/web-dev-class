// data types 
// var age = "my agae is 26"; 

// strings, numbers, booleans
// enums, null, undefined, 

// for javascript
// strings, numbers, booleans, object, array, null, undefined


// others
// for numbers-> int, float: int = 0-9 500.4, 1, float: 300, 5.9, double: 50.5


// for javascript
// strings, numbers, booleans, object, array, null, undefined
// BASIC/PRIMITIVE => strings, numbers, booleans,  null, undefined, BigIntN
// NON-PRIMITIVE=> Objects, array, functions, date, RegExp, map, set, weakMap, weakSet

// MAP
// var map = new Map();
// map.set('age', 50)
// map.set('name', "themmy")
// map.set('school', "lautech")
// var mySet = new Set();
// mySet.add(500)
// mySet.add("tope")
// mySet.add("tope")
// mySet.add("tope")
// mySet.add(200)
// console.log(mySet);
// console.log(map.size);
// object contains key and value pair 
var weakMap = new WeakMap();
weakMap.set({'hh':'s'}, 50);
var weakSet = new WeakSet();
// var car = {
//     'engine': "v8",
//     'year': 2002,
//     'tire': [ 1,2,3,4],
// };
// car.engine = 'v6';
// console.log(Object.keys(car).length);

// var person = {
//     'hight': 'Tope\'s car'
// }

// var list = [10,5,5,2,4,53,23,7,9,0,5];
// var finder = 5;
// var newArr = [];
// // console.log(list.forEach((element)=>{
// //     console.log(element + 1, 'inner');
// //     newArr.push()

// // }));
// // find, findIndex => come back
// console.log(list.toString());
// console.log(list);
// console.log(list);

// var age = "he" "llo";

// var age = "hello";
// var arryAge = [ 30, 5, 5 ,6, 7, 8, 9, 9, 50.0];
// var sum = (a, b)=>{
    
// }
// console.log(sum(50, 60));
// console.log(sum(100, 500));
// var dob = new Date();
// dob.getDate
// dob.getFullYear
// // arryAge.splice(0, 5);
// console.log(arryAge.filter((arr)=> arr < 30 ));
// // arryAge.length;

// // arryAge.lastIndexOf(5);
// console.log(arryAge.lastIndexOf(5));
// // arryAge.join;

// arryAge.splice(0, 5);
// arryAge.splice(0, 5);

// console.log(age.replace('-', '7000'));



// Numbers
// const age = 50.76433233;

// console.log(age.toExponential());
// console.log(age.toFixed());
// console.log(age.toLocaleString());
// console.log(age.toPrecision(6));
// console.log(age.toString());
// console.log(parseInt(age));
// console.log(parseFloat(age));
// console.log(JSON.stringify(age));

// booleans
// true or false
const isLoading = false;

if (!isLoading) {
    // render account is active
    console.log('it is true');
}else{
    // render account is in-active
    console.log('it is false');
}