// =============================Yahoo Baba ==============================================

let arr = {
    firstName : "Irfan",
    lastName : "Ramzan",
living : {
 'city' : 'lahore',
  'country' : 'pakistan'
},
    sallry : function(){
     return 2500;
   },

   fullName : function(){
     return firstName + " " + lastName;
   }
}


// ------------------------------Objects ----------------------------------
var person = new Object();

person.firstName = 'Irfan';
person.lastName = 'Ramzan';
person.age = 25;


console.log(person);
console.log(person.firstName +" "+ person.lastName );
console.log(person.lastName); 


// -------------------------------Array of Object -----------------------------

var student =[
    {name :'irfan', age : 15 },
    {name : 'farhan' , age: 13},
    {name : 'Ramzan' , age: 14},
];
  
// console.log(student);

for(var i = 0; i < student.length; i++){
    console.log(student[i].name + " " + student[i].age);
}
