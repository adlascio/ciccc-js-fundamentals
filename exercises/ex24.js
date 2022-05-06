/*
In this challenge, we will be building a function that determines the last index of an item in an array.

When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

For example:

code	                                    output
lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	            3
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	            4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	            -1
lastIndexOf([ 5, 5, 5 ], 5);	                2
lastIndexOf([], 3);	                            -1

You may paste the following code after your function definition to help you verify it works correctly:

*/
// const lastIndexOf = (arrayData) =>{
//     arrayData.indexOf(item => {
//         console.log(item)
//     });
// }
// function lastIndexOf(arrayData, number){
//     console.log(arrayData.indexOf(number))
// }
// const lastIndexOf = function(arrayData,number){
//     arrayData.forEach(function (item){
//         console.log((item))
//         if(item ===number){
//             console.log(item[])
//         }
//     });
// }
let x
let y
// function lastIndexOf(arrayData, number){
//     for(let i = 0; i < arrayData.length; i++){
//         x = arrayData[i]
//         // console.log(x)
//         if(x === number){
//         }
//     }
//     return arrayData[x]  
    
// }

function lastIndexOf(arrayData, number){
    let index = -1
    for(let i = 0; i < arrayData.length; i++){
        // x = arrayData[i]
        // y = i
        // console.log(x)
        if(arrayData[i] === number){
            index = i
            }
    }
        // return y
        return index
    
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2),  4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

// console.log(lastIndexOf ([ 0, 1, 4, 1, 2 ], 1))
