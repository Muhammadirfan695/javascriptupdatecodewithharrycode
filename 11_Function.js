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
let v =hello();
console.log(v)
console.log("one plus Average of a and b is", onePlsAvg(a,b))
console.log("one plus Average of b and c is", onePlsAvg(b,c))
console.log("one plus Average of c and a is", onePlsAvg(c,a))