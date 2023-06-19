/*
// Q No 1
console.log("Chapter No4 ParctiCe Exercise")
let nam = 'irfan\'ramzan'
console.log(nam.length)
*/

// Q No 2

const sentenc = 'The quik brown fox jumps over the lazy boy ';
const word = 'quik2';
console.log(sentenc.includes(word))
console.log(`The word '${word}' ${sentenc.includes(word)? 'is' : 'is not '} in the sentence`);

/*
// Meth Function StartWith in Js
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// Expected output: true
console.log(str1.startsWith('Sat', 3));
// Expected output: false
*/

/*
// Meth Function endtWith in Js
const str1 = 'Cats are the nbest!';
console.log(str1.endsWith('best!'));
// Expected output: true
console.log(str1.endsWith('best', 18));
// Expected output: true
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));
// Expected output: false
*/

// Q No3
console.log(word.toLowerCase())
console.log(word.toLocaleUpperCase())

// Q No 4
let str2 = 'Please give Rs 1000'
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// Problem No 5
let freind = 'Irfan'
freind[3] = "R"
console.log(freind) //frind in not changed, becuese string is immutable
