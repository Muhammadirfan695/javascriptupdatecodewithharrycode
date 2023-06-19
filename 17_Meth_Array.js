// Array Methos

let num = [1, 2, 3, 34,4]
let b = num.toString()// b is new a string

console.log(b, typeof b)
let c = num.join("_")
console.log(c, typeof c)
let r = num.pop() // Pop returns the poped element
console.log(num, r)
let  d = num.push(56) // push returns the new array length
console.log(d , num) 

// let t = num.shift() // First element  Remove 
// console.log(t, num)
let s = num.unshift(34) // First element  Remove 
console.log(s, num)


// Quiz Solve  It
let arr = ["irfan", "Ramzan", "Bilal", "Shejzad" ]
for (let i = 0; i <arr.length; i++){
    console.log(arr[i])
}