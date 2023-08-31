
//-----------chapter Number 5 --------------------------//
let num = [1, 2, 3, 4,5,6,7,8,9]
let num_More = [11, 12, 13, 14,15,16,17,18,19]
let num_Even_More = [21, 32, 53, 44,25,246,237,218,319]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// ------------------Concatinate--------------------------------------
// let newArray = num.concat(num_More, num_Even_More)
// console.log(newArray)
// console.log(num, num_More)

// -----------------Sort Method----------------------------------
let  compare = (a, b) =>{
    return a - b
}
let num1 = [5121, 232, 13, 664,35,6678,67,48,89]
// num1.sort() //Alphabeticaly sort// 1st method 
num1.sort(compare)   // Sort  2nd method
console.log(num1)

// --------------------------Splice and Slice ----------------------------
// Splice new atom for add 

//------------------------Splice -------------------------
// let num2 = [3242,23,454,52,12,224,4]
// let NewArray = num2.splice(2 , 3 ,10210,2021,3021,4012,2012)
// console.log(num2)   
// console.log(NewArray);  // reTurn New Array Modifie the array

// //---------------------Slice -----------------------------------
// let num3 = [3242,23,454,52,12,224,4]
// let NewArray1 = num3.slice(2 , 5)
// console.log(num3)   
// console.log(NewArray1); //new newarray return 


//--------------------------- function method IF-Else or Turnry Operator  --------------------------
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );


// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
// 'Do you agree?',
// () => console.log('You agreed'),
// () => console.log('You interrupted execution'),
// );

