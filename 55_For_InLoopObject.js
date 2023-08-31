var obj = {
    firstName : "Irfan",
    lastName : 'Ramzan',
    age : 24,
    country : "Pakistan"
};

    //key and Object print through  for (in) loop 
    // key  print property and obj key value print 
for (var key in obj){
    console.log(key + " : " + obj[key]);
}