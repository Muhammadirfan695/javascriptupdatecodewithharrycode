// While Loop 
// Ans : Condition 1st execute the block of code run 
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }


// Do While Lopp
// Do While Loop Block of code 1st run then after condition run

// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// let i = 0;
// do{
//     console.log(i)
//     i++;
// }while(i<n)

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?');
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
  
    alert( "Showing you the movie" ); // (*)
    // ...
  }