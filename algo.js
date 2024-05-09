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

function order(words) {
    if(words == '') return '';
    
    const newArr = words.split('');
    const bulkArr = words.split(' ');
    const numbersArr = [];
    const final = [];

    // To extract numbers out
    for (let i = 0; i < newArr.length; i++) {
        if (parseInt(newArr[i]) > 0) {
            numbersArr.push(parseInt(newArr[i]));
        }
    }

    // we need to sort the array in ACS
    numbersArr.sort();



    for (let i = 0; i < numbersArr.length; i++) {


        for (let j = 0; j < bulkArr.length; j++) {
            if (bulkArr[j].includes(numbersArr[i])) {
                final.push(bulkArr[j]);
            }
        }
    }
    return final;
}
console.log(order('thi9s mo5ney i4s he3re'));
// reduce


