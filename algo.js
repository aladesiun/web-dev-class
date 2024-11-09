// function solution(str, ending) {
//     // if (
//     //     str.split('').reverse()
//     //     .slice(0, ending.length)
//     //     .reverse().join('')
//     //     .includes(ending)
//     // ) {
//     //     return true
//     // }

//     // if (
//     //     str.substr(-ending.lenght)
//     // ) {
//     //     return true
//     // }
//     // return false;
//     console.log(str.substr(-ending.length, 5));

//     // 
// }
// console.log(solution('sumoiscoming', 'ing')); 


// function descendingOrder(n) {
//     if (n < 0) return;
//     let newNArry = [];
//     let strArry = String(n).split('');

//     strArry.map((item) => newNArry.push(parseInt(item)));
//     return parseInt(newNArry.sort().reverse().join(''));

// }
// console.log(descendingOrder(5667222));

// function order(words) {
//     if(words == '') return '';

//     const newArr = words.split('');
//     const bulkArr = words.split(' ');
//     const numbersArr = [];
//     const final = [];

//     // To extract numbers out
//     for (let i = 0; i < newArr.length; i++) {
//         if (parseInt(newArr[i]) > 0) {
//             numbersArr.push(parseInt(newArr[i]));
//         }
//     }

//     // we need to sort the array in ACS
//     numbersArr.sort();



//     for (let i = 0; i < numbersArr.length; i++) {


//         for (let j = 0; j < bulkArr.length; j++) {
//             if (bulkArr[j].includes(numbersArr[i])) {
//                 final.push(bulkArr[j]);
//             }
//         }
//     }
//     return final;
// }
// console.log(order('thi9s mo5ney i4s he3re'));
// reduce

// const rev = (n)=>{
//     const arr = [];

//     for (let i = n; i > 0; i--) {
//         arr.push(i)
//     }

//     return arr;
// }
// console.log(rev(5));


// function isValidWalk(walk) {
//     if(walk.length < 10 || walk.length > 10  ) return false;
//     for (let i = 0; i < walk.length; i++) {
//        if (walk[i] === walk[i + 1]) {
//         return false;
//        }
//     }
//     return true;
// }
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e']));

// function isSquare(n) {
//     if (n < 0) return false;
//     console.log(typeof Math.sqrt(n));
//     return Math.sqrt(n).toString().includes('.') ? false : true;
// };
// console.log(isSquare(2.5));

// const longest = (s1, s2) => {
//     console.log( [new Set([...s1, ...s2])]);
//     return [new Set([...s1, ...s2].sort())].join('');
// }
// console.log(longest('sderwere', 'utureheh'));

function likes(names) {
    const length = names.length;
    let finalStr = "";
    let pattern1 = "likes this";
    let pattern2 = "like this";
    let pattern3 = "others like this";

    switch (length) {
        case 0:
            return "no one likes this";
        case 1:
            return finalStr = finalStr + names[0] + " " + pattern1;
        case 2:
            return finalStr = finalStr + names[0] + " " + "and" + " " + names[1] + " " + pattern2;
        case 3:
            return finalStr = finalStr + names[0] + "," + " " + names[1] + " " + "and" + " " + names[2] + " " + pattern2;
        default:
            return finalStr = finalStr + names[0] + "," + " " + names[1] + " " + "and" + " " + (length - 2) + " " + pattern3;

    }


}
console.log(likes(['tope', 'ddd', 'hello', 'mad guy']));