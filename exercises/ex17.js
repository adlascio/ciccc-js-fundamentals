/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/
const laugh = (arg)=>{
    let line= " "
    for(let i =0; i < arg; i++){
        line+="ha"
    }
    console.log(line +"!")
}
laugh(3);
laugh(4);
laugh(5);
laugh(6);