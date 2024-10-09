// param destructuring 

// object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function pavan({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

pavan(person);