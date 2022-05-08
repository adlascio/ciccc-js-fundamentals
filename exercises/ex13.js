/*
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Save your final answer in a variable called solution and print it to the console.
*/
let x = 12;
let sum = 0;
for (let i = 0; i < 12; i++){
    x = x *(x-1)
}
console.log(x)