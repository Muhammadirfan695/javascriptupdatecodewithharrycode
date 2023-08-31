// --------------------Yahoo Baba ---------------------------------

// //Simple value print in Array
// let arr = [10, 20,30,40,50]
  
// for(let i = 0; i<=4; i++){
//     console.log(arr[i])
// }

// let arr = new Array(3);

// // arr[0] = 12;
// // arr[1] = "irfan";
// // arr[2] =  true;


// for(let g = 0 ; g <= 3; g++){
// arr[g] = prompt("Enter the the value");
// }

// for(let i = 0; i <=3; i++){
//     console.log(arr[i]);
// }


// ----------------------------------Nested Array -----------------

// let arr = [
//           ["irfan",1 ,"schol", "B.com"],
//           ["farhan", 2, "school" , "Bscs"],
//           ["ramzan", 3, "HighShol" , "cs"],
//           ["Zahid", 4, "intermediate" , "AC"]
// ];

//   console.log(arr);
//   for(let i = 0 ; i <=arr.length ; i++){
//     // letpri = " ";
//     for(let j = 0; j <=arr[i].length; j++){
//         console.log(arr[i][j] + " ");
//     }
// console.log(" ");
//   }
 
// let arr = [
//     ["irfan", 1, "schol", "B.com"],
//     ["farhan", 2, "school", "Bscs"],
//     ["ramzan", 3, "HighShol", "cs"],
//     ["Zahid", 4, "intermediate", "AC"]
// ];

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     let line = "";
//     for (let j = 0; j < arr[i].length; j++) {
//         line += arr[i][j] + " ";
//     }
//     console.log(line);
// }

// let arr = [
//     ["irfan", 1, "schol", "B.com"],
//     ["farhan", 2, "school", "Bscs"],
//     ["ramzan", 3, "HighShol", "cs"],
//     ["Zahid", 4, "intermediate", "AC"]
// ];

// // console.log(arr[0][1]);
// // console.log(arr[1][2]);
// // console.log(arr[2][2]);

//  for (let i = 0; i <=4; i++){
//     let line = "";
//     for(let j = 0; j <= 4; j++){
//       line += arr[i][j] + " ";
//     }
//     console.log(line)
//  }
let arr = ["Imrfan", 12, "Male", "Female"]

console.log(arr);
// ---- Modify value------
arr[0] = "Zahid";
console.log(arr);
arr[1] = 20;
console.log(arr);

delete arr[1];
console.log(arr);

console.log(arr[1] +"  Undefined_Value");

// ================================================================


// let marks = [56, 83, 89, 69, false, "Not Present" ,65]
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[6]) // Will bbe Undefinnd becuase index 6 does not exist
// console.log("The length of Marks is",marks.length)
// marks[6] = 76 //Addimg a new number value to the Array
// marks[0] = 45// Changing the value of an array
// console.log(marks)
// console.log(typeof marks)



