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