/*
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

TIP: The 1st element of any array has an index of 0.

Afterwards, print out the prices array to the console.
*/
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices.splice(0, 1, 3)
prices.splice(1, 1, 3)
prices.splice(7, 1, 3)

console.log(prices)
// function changePrice(arrayData){
//     let newArray = arrayData
//     newArray.push(3.00)
// }
// changePrice(change1)

// 配列型データ定義
// let fruits = ["apple", "melon", "orange"];
// // 引数に配列型をセットすることを前提とした関数定義
// function testFn( arrayData ){
//   console.log("本日のフルーツ一覧");
//   console.log(arrayData)
// }
// // 関数の実行
// testFn( fruits );