//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"}]
}

let listOutDishes = (inputObj) => {
    for(item of Object.values(inputObj)){
        if(typeof item =="string"){
            console.log(item);
        }
        else{
            if(Array.isArray(item)){
                if (typeof item[0] =="string"){
                    console.log(item.join("\n"));
                }
                else if (typeof item[0] =="object"){
                    console.log(Object.values(item[0]).join("\n"));
                }
            }
        }
    }
}
console.log(listOutDishes(person3))







//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor (first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }



    getInfoList=() => {
        let info = [this.firstName, this.lastName, this.age];
        return info;
    }

    passTime=(ageToAdd=1) => {
        this.age += ageToAdd;
    }
}
let person1 = new Person("Joe", "Santagato", 35);
let person2 = new Person("Jim", "Jeffries", 55);

console.log(person1.getInfoList().join("\n"));
console.log(person2.getInfoList().join("\n"));

person1.passTime(3);
console.log(person1.getInfoList());
console.log(person2.getInfoList());









// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isOverTen = (num) => {
    return new Promise(
        (resolve, reject)=>{
            if(num>10){
                resolve(num);
            }
            else{
                reject(num);
            }
        }
    )
}

isOverTen(66).then(
    (result) => {
        console.log(`${result} is a "Big word"`);
    }
).catch(
    (error)=>{
        console.log(`${error} is a "Small Number"`);

    }
)

