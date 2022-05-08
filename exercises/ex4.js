/*
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:

if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,

I'd like two scoops of vanilla ice cream in a cone with peanuts. 
*/

const ice = (flavor , vessel, toppings ) =>{
    let checkFlavor = false
    let checkVessel = false
    let checkToppings = false
    if(flavor === "vanila" || flavor === "chocolate"){
        checkFlavor = true
    }
    if(vessel === "cone" || vessel === "bowl"){
        checkVessel = true
    }
    if(toppings === "sprinkles" || toppings === "peanuts"){
        checkToppings = true
    }
    if(checkFlavor == true && checkVessel == true && checkToppings == true ){
        console.log(`Id like twoo scoope of ${flavor} ice cream in a ${vessel} with ${toppings}`)
    }
    
}
ice("vanila", "cone", "sprinkles")
ice("chocolate", "cone", "sprinkles")
ice("orange", "cone", "sprinkles")

