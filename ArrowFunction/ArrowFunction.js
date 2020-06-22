//without arrow function
let sum = function(a, b) {
    return a + b;
  };

  //Arrow function
let sum = (a, b) => a + b;
console.log(sum(1,2));

//Multi line arrow function
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log(sum(1,2));// 3