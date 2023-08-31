
// ------------------- Yahoo Baba ---------------------
// --------------------Array Function ----------------- 

// let arr = ["Irfan", "Apple", "Capital", "Roopu"]

// console.log(arr);

// arr.sort()
// console.log(arr);
// arr.reverse()
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push("Kala")
// console.log(arr);
// ---------------------------Shift And Unshift-------------------------
// arr.shift()
// console.log(arr);
// arr.unshift("iuri")
// console.log(arr);

// ----------------------concat and join -------------------------------
// var a = ["Bila", "Rizwan","ram"];
// var b = ["ravi", "white"];
// var d = ["fdfd", "tera"];
// var c = a.concat(b,d);
// var d = c.join(" / ")

// console.log(d);


// ----------------------Slice and Splice -------------------------------
//            0         1          2          3         4        
// let arr = ["Bilal" , "Irfan" , "Farhan", "Ramzan", "Usman"];
// //        -4         -3    ,     -2     ,  -1   , 0
// let b = arr.slice(-2)
// let b = arr.slice(-3,- 1)
// console.log(b);


// let arr = ["Bilal" , "Irfan" , "Farhan", "Ramzan", "Usman"];

//   console.log(arr);
// //            index , del
//    arr.splice(  2,     1, "wew", "oee");
//    console.log(arr);

//   ----------------isArray -------------------------
/*
var  arr = ["irfan", "Ramzan", "hafiz_Sab"];
// var arr = "34";
// var b =Array.isArray(c);
// console.log(b);
 
if(Array.isArray(arr)){
    console.log("This is an Array");
} else {
    console.log("This is not Array");
}
*/

// ----------------------------IndeXOf And LastIndexOf -------------------------------
// index Of fisrt sy start krta hai
// lstIndexOf last sy start krta hai
/*
var arr1 = ["Irfan", "Farhan" , "Ramzan", "Rehman"];
    //  kis index per kon c value pry hai 
           //then jis index sy start krna chahty hai value udher sy stat krlain gy 
            //    // value  
// var c = arr1.indexOf("Farhan");
    //               // value   ,index
    //  var c = arr1.indexOf("Ramzan" , 1);
var c = arr1.lastIndexOf("Farhan" ,1)
console.log(c);
*/


// ---------------------- includes Method Of Array --------------------------------
// Includes workin value exist krty hai y ni
/*
var  arr = ["irfan", "Ramzan", "hafiz_Sab"];
var b = arr.includes("Irfan");
console.log(b);

if(arr.includes("irfan")){
    console.log( "true") // string print true or false
    // console.log(typeof arr);  //Object 
}else {
    console.log("false");
}
*/
// ------------------------Some and Every function
// Some() like || yh condition asy km krty hai jub aik bhi value big mil jay true krdy ga ager na mili to false
// every() like && working jub tk sb vlue >= 18 is sy bry ni hongy tub tk true return ni kry ga

  // var age= [17, 17, 17, 18];
  // var  ad = age.some(adultCheck);
  // // var  ad = age.every(adultCheck);
  // console.log(ad);

  // function adultCheck(age) {
  //   return age >= 18;
  // }
// --------------------- 2nd Method Som and Every implement in function---------- 
/*  
var age= [17, 17, 17, 18];
  var ad = age.some(function(age){
     return age >= 18;
  });
  console.log(ad);
  */

  //-------------------- with => arrow function
/*
var age= [17, 17, 17, 18];
  var ad = age.some(age => age >=18);
  console.log(ad);
  */
// ----------------------- find , FindIndexOf function-----------------------------------

// //  find one time chlta hai jahan us ko value big mil jay 
// var ages = [17, 70, 19, 45, 250];

// // wahan true krdy ga
//     var fn =ages.find(checkFindValue);  // return value
//     // var fn =ages.findIndex(checkFindValue); // return  Index number
// console.log(fn);
 
// function checkFindValue(ages){
//     return ages >= 18 ;
// }

// ----------------------------Filter Method Array -----------------------------------------

//  in Filter jitny bhi number hieghest hai wh sab number utha kr ly ay ga
/*
var fltr = [17, 45, 19, 70];
var f = fltr.filter(checkFilter);
  console.log(f);
  // console.log(fltr);

  function checkFilter(fltr){
    return fltr >= 18;
  }
*/

// ------------------------------Maximum Number Find Out ------------------------------------

// const numbers = [5, 12, 2, 6, 87, 1, 0, 6, 10000,50];
// const maxValue = Math.max(...numbers);

// console.log(maxValue); // Output: 87

// let num = numbers.sort((a,b)=>a-b)

// console.log(num[numlength - 1]);


// const getMaximu = (arr) =>
// arr.reduce((largestNum , num) => Math.max(largestNum , num))
// const arr = [12,3, 5,67,34, 78,2,105,-3];
// console.log(getMaximu(arr));

// let arr = [10,2,-2, 13, 15,19,58];
// const getMaximu = (arr) =>{
//     let smallNum = Number.NEGATIVE_INFINITY;
//     for (const num of arr) {
//       console.log(num,smallNum );
//         if (num > smallNum){
//             smallNum = num;
//         }
//     }
//    return smallNum;
// }

// const saml = getMaximu(arr);
//   console.log(saml);


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// let n = prompt("enter any name")

//  let reverseN = n.toString().split("").reverse().join("");

//  console.log(reverseN);

// console.log("a");
// setTimeout(()=>{
//   console.log("b");
// },2000)
// console.log("c");

// setTimeout(()=>{
//   console.log("d");
// },1000)

// let num = [1,3,5,1,4,3,5,2]

// let num1 = [...new Set(num)]

// console.log(num1);

// var arr = ["january", "february", "january",  "march", "february", "february"];   

// function getDuplicates(arr) { 

//        return arr.filter((item, index) => console.log(arr.indexOf(item)));

// }    

// console.log(getDuplicates(arr)); 
// --------------------------------------Duplication Of Array -----------------------------------------------
// function findDuplicates(arr) {
//   return arr.filter((value, index) => {
//     console.log(value, "fuck", index);
//       return arr.indexOf(value) !== index;
//   });
// }

// const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 7];
// const duplicateValues = findDuplicates(array);
// console.log(duplicateValues);   



// console.log(arr);
// console.log(arr.fullName());
console.log(arr.living.city);









// console.log(arr);


// const getMaximum = (arr) => {
//   let largeNum = Number.POSITIVE_INFINITY;
//   for (const num of arr) {
//       if (num > largeNum) {
//           largeNum = num;
//       }
//   }
//   return largeNum;
// }

// const arr = [10, 13, 15,19];
// const largest = getMaximum(arr);
// console.log(largest);


// -------------------------toString(), fill()------------------------------

// var a = ["Irfan" , "Farhan", "Ramzan"];

// // var c =  a.toString();  // toString(Method) 
// var c =  a.fill("Bilal"); // fill( method)
// console.log(c);

// ----------------------1st Method   For Each Loop ---------------------

// var a =  ["Irfan"  , "Farhan" , "Ramzan"];
// //  a.forEach()
// a.forEach(function(value,index){
//     console.log(index + " : " +value+" ");
// })

// -----------------------For Each Loop 2nd Method declare ---------------------

// var a =  ["Irfan"  , "Farhan" , "Ramzan"];
 
// a.forEach(loop)

// function loop(value,index){
//     console.log(index + " : " + value+" ");
// }
  // ====================================================
// Array Methos
// let num = [1, 2, 3, 34,4]
// let b = num.toString();  // b is new a string
  
// console.log(b, typeof b)
// let c = num.join("_")
// console.log(c, typ eof c)
// let r = num.pop() // Pop returns the poped element
// console.log(num, r)
// let  d = num.push(56) // push returns the new array length
// console.log(d , num) 

// let t = num.shift() // First element  Remove 
// console.log(t, num)

// let s = num.unshift(34) // First element  Remove 
// console.log(s, num)


// Quiz Solve  It
// let arr = ["irfan", "Ramzan", "Bilal", "Shejzad" ]
// for (let i = 0; i <arr.length; i++){
//     console.log(arr[i])
// }

