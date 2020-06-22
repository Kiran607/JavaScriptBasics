exampleFunction=()=> {
    let x = "declared inside function";  // local scope x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}
exampleFunction();

let x = "declared outside function"; // Global scope

exampleFunctionGobal=()=> {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);

exampleFunctionGobal();

//block scope

if (true) {
    // "if" block scope
    const message = 'Hello';
    console.log(message); // 'Hello'
  }
  console.log(message); // throws ReferenceError

//var is not a block scope
if (true) {
    // "if" block scope
    var count = 0;
    console.log(count); // 0
  }
  console.log(count); // 0

  run=()=> {
    // "run" function scope
    var message = 'Run, Forrest, Run!';
    console.log(message); // 'Run, Forrest, Run!'
  }
  
  run();
  console.log(message);


  //creates a scope for let and const
  runFunction=()=> {
    // "run" function scope
    const two = 2;
    let count = 0;
    function run2() {}
  
    console.log(two);   // 2
    console.log(count); // 0
    console.log(run2);  // function
  }
  
  runFunction();
  console.log(two);   // throws ReferenceError
  console.log(count); // throws ReferenceError
  console.log(run2);  // throws ReferenceError


  //Lexcial scope

  function outerFunc() {
    // the outer scope
    let outerVar = 'I am from outside!';
  
    function innerFunc() {
      // the inner scope
      console.log(outerVar); // 'I am from outside!'
    }
  
    return innerFunc;
  }
  
  const inner = outerFunc();
  inner();