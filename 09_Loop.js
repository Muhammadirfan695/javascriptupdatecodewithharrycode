console.log("For Loop Forr In Loop and For of Loop")


// -----------------------------Yahoo Baba -----------------------------
/*
let a=1;

while(a <= 10){
    console.log(a + ") Irfan Ramza");
      a++;
}
*/

//  --------------------------------- Do While Loop------------------------------------

// let c = 1;
// do{
//     console.log("Bhai Muzammel");
//     // c = c +1
// }while(c<=10)



// let a = 3;
// for( let  i =0; i <= a; i++){
//     if( a == 3){
//     console.log("print the number");    
// }else{
//     console.log("Not a match number");
// }
// }

// -----------------------Even And Odd Number print--------------------
// for(let a =0 ; a <= 10; a++){
//      if(a % 2 != 0){ 
//         console.log(a+ ") ODD Number")
//      }
// }
// --------------------Nsted Looping Data print in tabular form------------------------
// for(let a = 1; a <= 100 ; a= a+10){
//     let numb = " "; 
//     for(j = a; j <= a +10 ; j++){
//     numb  += j;
//     }
//     console.log(numb);
// }

// ----------------------print rectangle --------------------
/*
1
12
123
1234
12345
*/
// for(let a = 1; a <= 5;  a++){
//     let numb = ""; 
//     for(j = 1; j <= a  ; j++){
//     numb  += j;
//     }
//     console.log(numb);
// }

// for(let a = 1; a <= 5;  a++){
//     let numb = "  "; 
//     for(j = 1; j <= a  ; j++){
//     numb  += a;
//     }
//     console.log(numb);
// }


//   let b = 5;
//    for (let i = 0 ; i <= b; i++){
//     let star= "";
//     {
//         for (let j = 1; j <= (2* i-1); j++){
//             star += "*";
//         }
//         console.log(star);
//     }
//    }

// ------------------------For Each Loop -------------------------------
/*
let arr = ["Irfan", "Ramzan","Rehan", "Muzammil"];

arr.forEach(function(index, value){
  console.log(value + ") :" + index );
})
*/



// ====================================================================================

// Program No 1
/*
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for  (let i = 0;  i < n; i++){
    sum += (i + 1)
    // console.log((i+1), "+") 
}
console.log("Sum of first " + n +" natural numbers is " )
*/

// let a = 4;
// // function printStars(rows) {
//   for (let i = a; i >= 1; i--) {
//     let star = "";
//     for (let j = 1; j <= i+1; j++) {
//          star += ' * ';
//     }
//     console.log(star);
//   }

//   let b = 5;
//    for (let i = 0 ; i <= b; i++){
//     let star= "";
//     {
//         for (let j = 1; j <= (2* i -1); j++){
//             star += "*";
//         }
//         console.log(star);
//     }
//    }
// 

// var a=["Irfan", "Ramzan", "Farhan", "Rhan"]

// a.forEach(function(value){
//   console.log(value + "\n");
// })
// Program No 2
// Object For In Loop
let obj = {
    Muaz : 90,
    Bilal: 80,
    Hammad: 57,
    Zahid: 23,
    Zahid: 23

}
// For In Loop

// key and object
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a]  )
}

// variable of iterable
// For Of Loop
// for (let b of "Irfan42S"){
//     console.log(b )
// }

let stra = "AApple";
let strb = "leppA!!";

let a = stra.replace(/[^\w]/g, '').toUpperCase(); 
console.log(a)
let b = strb.replace(/[^\w]/g, '').toLowerCase(); 
// console.log(b)
let A = stra.split('').sort().join('');

let B = strb.split('').sort().join('');
// console.log(B)
// console.log(A)
// console.log(A === B);

    let value = {};
    for (let keyValue of A) {
        // console.log(valuecheck)
        if (value[keyValue]) {
            value[keyValue]++;
            // console.log(value[keyValue]);
        } else {
            value[keyValue] = 1;
            // console.log(value[keyValue])
        }
    }
    // console.log(value);




// ------------------------------- Bilal Font End As Practice Question------------------------------------------ 
    
// let orignalArayRpint = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// let uniqArr = [];

// for (let i =0; i <orignalArayRpint; i++) {
//     if(uniqArr.indexOf(originalArray[i]) == -1){
//     console.log((originalArray[i]));
//     }
// }

// var originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7,7];
// var uniqueArr = [];

// for (var i = 0; i < originalArray.length; i++) {

//   console.log((originalArray[i]));
//   if (uniqueArr.indexOf(originalArray[i]) === -1) {
//     uniqueArr.push(originalArray[i]);
//   }
// }

// var resultArray = uniqueArr;

// console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6, 7]

// function removeDuplicates(arr) {
//     var uniqueArr = [];
    
//     for (var i = 0; i < arr.length; i++) {
//       if (!uniqueArr.includes(arr[i])) {
//         uniqueArr.push(arr[i]);
//       }
//     }
    
//     return uniqueArr;
//   }