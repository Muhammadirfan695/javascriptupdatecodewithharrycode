// ---------------------------YahooBaba
var a = "9re";
var num = Number(a);
console.log(num + 10);


// -----------print not A number
var a = "9 9";
var num = Number(a);
console.log(num )

// ---------parsInt ----
//  jo is ko first wali value mily gy wh return krdy ga

var a = "10.9 kfjir";
var num = parseInt(a);
console.log(num )


// ---------------parseFloat ------------------
var a = "10.9 kfjir";
var num = parseFloat(a);
console.log(num )



// ------------isFinite---------------
// yh check kry ga Number finite hai ya Infinite

var a = "10.9 kfjir";
var num = Number.isFinite(a);
console.log(num )


// -------------------toFixed---------------

var a = 10.956;
var num = a.toFixed(2);
console.log(num)

// -----------------toPrecision -------------------

var a = 10.956;
var num = a.toPercision(2);
console.log(num)