// Create a object
let marks = {
    irfan: 90,
    Bila: 80,
    zahid: 70,
    Muaz: 4
}
// Problem Number 1

for(let i =0; i<Object.keys(marks).length; i++){
    //  console.log("This marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
// Problem Number 2

for (let key in marks){
    console.log("This marks of " + key + " are " + marks[key])
}


// Problem No 03
/*
let cn = 43  // Cou
let i 
while(i != cn){
    console.log("Try Again")
    i = prompt("Enter a number")
}
console.log("You have entered a correct number")
*/
// problem No 4

const mean = (a, b, c, d) => {
 return (a + b+ c+ d) / 4   
}

console.log(mean(4,5, 6, 7))