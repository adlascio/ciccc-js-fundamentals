/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/
const result = (person) => {
    if (person.witdh <= 19 && person.Length <= 28 && person.Sleeve <= 8.13) {
        console.log(`${person.name} is S`)
        return;
    } else if (18 < person.witdh <= 20 && person.Length == 29 && 8.13 < person.Sleeve <= 8.38) {
        console.log(`${person.name} is M`)
    } else if (20 < person.witdh <= 22 && person.Length == 30 && 8.38 < person.Sleeve <= 8.63) {
        console.log(`${person.name} is L`)
    } else if (22 < person.witdh <= 24 && person.Length == 331 && 8.63 < person.Sleeve <= 8.88) {
        console.log(`${person.name} is XL`)
    }else {
        console.log(`${person.name} is N/A`)
    }

}

const person1 = {
    name: "atsu",
    witdh: 18,
    Length: 28,
    Sleeve: 8.13
}
const person2 = {
    name: "vini",
    witdh: 20,
    Length: 29,
    Sleeve: 8.38
}
const person3 = {
    name: "kent",
    witdh: 20,
    Length: 32,
    Sleeve: 8.38
}

result(person1)
result(person2)
result(person3)