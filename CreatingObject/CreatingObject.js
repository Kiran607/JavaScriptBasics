//Object creation using object litreals
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person);


//using new key word
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//Using constructor
Car=(make, model, year)=> {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  let myCar=new Car('Eagle', 'Talon TSi', 1993);

  // Animal properties and method encapsulation using create method
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
      console.log(this.type);
    }
  };
  
  // Create new animal type called animal1 
  var animal1 = Object.create(Animal);
  animal1.displayType(); // Output:Invertebrates
  
  // Create new animal type called Fishes
  var fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // Output:Fishes