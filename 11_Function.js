// -------------------Yahoo Baba ---------------
// Simple function Use method
/*
function fullNam(firststname ="irfan", lastnaem ="farhan"){

    var a = firststname +" - "+ lastnaem;
    return a;
}

   var b = fullNam("shehzad", "ramzan");
     console.log(b);
*/

// ------------------------2nd Percentage and sum ----------------------------
/*
function sum(eng, math,phy){
  var s = eng + math + phy;
  return s;
}
    function percentage(tt){
        var b = tt/300 * 100;
        console.log(b);
        // return b;
    }
var total= sum(12, 12.4,12);

//    console.log(total);
//    total= percentage(total);
//    console.log(total)

percentage(total);
*/

// ------------------Local And Global Variable -------------------------------
// ------------- Global Variable also work on function inside and outside  -----------
/*
//  var a = "irfan Rmzan";

function hello(){
    // Local variable use
    var a = "farhan Ramazn";
console.log(a + "<br>")     
}

hello();
console.log(a);
*/

// ==================================================================
/*
const hello = ()=>{
    console.log("Hy I am fine")
    return "hi"
}
function onePlsAvg(x, y){
    return 1 +(x+y)/2
}
let a = 1;
let b = 2;
let c = 3;
// let v =hello();
// console.log(v)
console.log("one plus Average of a and b is", onePlsAvg(a,b))
console.log("one plus Average of b and c is", onePlsAvg(b,c))
console.log("one plus Average of c and a is", onePlsAvg(c,a))


// function myFunction(x, y){
//     return 1 + (x+y)/2
// }
*/

let stra = "Apple";
let strb = "leppA$$$";

let a = stra.replace(/[^\w]/g, '').toLowerCase();
let b = strb.replace(/[^\w]/g, '').toLowerCase();

let A = a.split('').sort().join('');
let B = b.split('').sort().join('');

 console.log(A===B)


function characterFrequency(str) {
    let storValue = {};
    for (let keyvalue of str) {
        if (storValue[keyvalue]) {
            storValue[keyvalue]++;
            
        } else {
            storValue[keyvalue] = 1;
            
    }
    return storValue;
}
console.log(characterFrequency(A))


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
