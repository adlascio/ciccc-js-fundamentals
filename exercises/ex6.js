/*
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.

Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores
Directions:
Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console. 
*/
const checkAnimal = (objAnimal)=>{
    if(objAnimal.animal === true){
        console.log(`${objAnimal.name} is carnivore`)
    }else if(objAnimal.plants === true){
        console.log(`${objAnimal.name} is herbivore`)
    }else if (objAnimal.animal === true && objAnimal.plants === true){
        console.log(`${objAnimal.name} is omnivore`)
    }else{
        console.log(`${objAnimal.name} is undefined`)
    }
}
const checkAnimal1 = (objAnimal)=>{
    if (objAnimal.animal == true && objAnimal.plants == true){
        console.log(`${objAnimal.name} is omnivore`)
    }else if (objAnimal.animal == false && objAnimal.plants == false){
        console.log(`${objAnimal.name} id undifined`)
    }else if (objAnimal.animal === true){
        console.log(`${objAnimal.name} is carnivore`)
    }else{
        console.log(`${objAnimal.name} is herbivore`)
    }
}

const objAnimal1= {
    name: "lion",
    animal: true,
    plants:false,
}
const objAnimal2 = {
    name:"giraffe",
    animal: false,
    plants: true,
}
const objAnimal3 ={
    name:"atsu",
    animal: true,
    plants: true,
}
const objAnimal4 ={
    name:"vini",
    animal: false,
    plants: false,
}
checkAnimal(objAnimal1)
checkAnimal(objAnimal2)
checkAnimal(objAnimal3)
checkAnimal(objAnimal4)
console.log("------")
checkAnimal1(objAnimal1)
checkAnimal1(objAnimal2)
checkAnimal1(objAnimal3)
checkAnimal1(objAnimal4)
console.log("------")

class Animal {
    constructor(name,animal,plants){
        this.name = name
        this.anmal = animal
        this.animal = plants
    }
    checkAnimalClass(){
        if (this.animal === true && this.plants === true){
            console.log(`${this.name} is omnivore`)
        }else if (this.animal === false && this.plants === false){
            console.log(`${this.name} id undifined`)
        }else if (this.animal === true){
            console.log(`${this.name} is carnivore`)
        }else{
            console.log(`${this.name} is herbivore`)
        }
    };
}
const arthur = new Animal('arthur', false, false)
console.log(arthur)
arthur.checkAnimalClass()