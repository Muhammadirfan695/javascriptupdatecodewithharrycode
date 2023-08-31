let stra = "Apple";
let strb = "leppA$$$";

let a = stra.replace(/[^\w]/g, '').toLowerCase();
let b = strb.replace(/[^\w]/g, '').toLowerCase();

let A = a.split('').sort().join('');
let B = b.split('').sort().join('');

console.log(A);

function characterFrequency(str) {
    let storValue = {};
    for (let keyvalue of str) {
        if (storValue[keyvalue]) {
            storValue[keyvalue]++;
        } else {
            storValue[keyvalue] = 1;
        }
    }
    return storValue;
}

console.log(characterFrequency(A));






















// -----------------------------------Ruf code Practice -------------------------------------------
// // console.log(anagram("Apple", "leppA"));
// // console.log(anagram("Fizzbuzz" , "buzzfizz"));
// // console.log(anagram("Faisal", "lasiafm"))


// function anagram(stringA, stringB) {
//     // Remove non-word characters and convert to lowercase
//     let convertedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     let convertedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    
//     // Sort the characters in the strings
//     let sortedStringA = convertedStringA.split('').sort().join('');
//     let sortedStringB = convertedStringB.split('').sort().join('');
    
//     // Compare the sorted strings
//     return sortedStringA === sortedStringB;
// }

// console.log(anagram("Apple", "leppA"));      // true
// console.log(anagram("Fizzbuzz!!!", "buzzfizz")); // true
// console.log(anagram("Faisal", "lasiafm"));   // false


// Create a object
// let marks = {
//     irfan: 90,
//     Bila: 80,
//     zahid: 70,
//     Muaz: 4
// }



//  in this code whitespacesremove then lowercase then string compare
//  let convertedString=stringA.replace(/[^\w]/g, '').toLowerCase();
// function anagram(stringA, stringB) {
   
    
// }



// let stra = "Apple";
// let strb  = "leppA$$$"

//  a = stra.replace(/[^\w]/g, '').toLowerCase();
//  b = strb.replace(/[^\w]/g, '').toLowerCase();
 
//       var c = a.split('').sort().join()
//       var d = b.split('').sort().join()



//       let stra = "Applle";
// let strb = "leppA$$$";

// a = stra.replace(/[^\w]/g, '').toLowerCase();
// b = strb.replace(/[^\w]/g, '').toLowerCase();

// var aChars = a.split('');
// console.log(aChars);
// var bChars = b.split('');
  
// var aCount = {};
// // var bCount = {};

// for (var i = 0; i < aChars.length; i++) {
//     var char = aChars[i];
//     console.log(char);
    
// }


// let stra = "Apple";
// let strb  = "leppA$$$"

//  a = stra.replace(/[^\w]/g, '').toLowerCase();
//  b = strb.replace(/[^\w]/g, '').toLowerCase();
 
//       var c = a.split('').sort().join()
//       var d = b.split('').sort().join()
// console.log(c === d);



// // let stra = "Apple";
// // let strb = "leppA$$$";

// // let a = stra.replace(/[^\w]/g, '').toLowerCase();
// // let b = strb.replace(/[^\w]/g, '').toLowerCase();

// // let sortedA = a.split('').sort().join('');
// // let sortedB = b.split('').sort().join('');
// // for (let char in sortedA) {
// //     console.log(char +" "+ sortedA[char]);
// // }

// let stra = "Apple";
// let strb = "leppA$$$";

// a = stra.replace(/[^\w]/g, '').toLowerCase();
// b = strb.replace(/[^\w]/g, '').toLowerCase();

// var aChars = a.split('');
// var bChars = b.split('');

// var aCount = {};
// var bCount = {};

// for (var i = 0; i < aChars.length; i++) {
//     var char = aChars[i];
//     aCount[char] = (aCount[char] || 0) + 1;
// }

// for (var i = 0; i < bChars.length; i++) {
//     var char = bChars[i];
//     bCount[char] = (bCount[char] || 0) + 1;
// }

// for (var char in aCount) {
//     console.log(char + ', ' + aCount[char]);
// }

// for (var char in bCount) {
//     console.log(char + ', ' + bCount[char]);
// }

// let freqMapA = characterFrequency(sortedA);
// let freqMapB = characterFrequency(sortedB);

// console.log(freqMapA);
// console.log(freqMapB);

// for (let char in freqMapB) {
//     console.log(char + ': ' + freqMapB[char]);
// }

// let stra = "Apple";
// let strb = "leppA$$$";

// let a = stra.replace(/[^\w]/g, '').toLowerCase();
// let b = strb.replace(/[^\w]/g, '').toLowerCase();

// let sortedA = a.split('').sort().join('');
// let sortedB = b.split('').sort().join('');

// function characterFrequency(str) {
//     let freqMap = {};
//     for (let char of str) {
//         if (freqMap[char]) {
//             freqMap[char]++;
//         } else {
//             freqMap[char] = 1;
//         }
//     }
//     return freqMap;
// }

// let freqMapA = characterFrequency(sortedA);
// let freqMapB = characterFrequency(sortedB);

// console.log(freqMapA);
// console.log(freqMapB);




// for (var i = 0; i < bChars.length; i++) {
//     var char = bChars[i];
//     console.log(char);
//     // bCount[char] = (bCount[char] || 0) + 1;
// }

// for (var char in aCount) {
//     console.log(char + ', ' + aCount[char]);
// }

// for (var char in bCount) {
//     console.log(char + ', ' + bCount[char]);
// }

// A, 1
// p, 2
// l,2
// e, 1
// Apple , {{0, 1}, {1,2}, {2, 1}, {3, 1}}
