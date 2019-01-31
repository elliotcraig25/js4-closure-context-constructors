// **** CLOSURES **** //

// SCOPE
let globalVar = "I am the global scope";
function outerScope() {
  let num = 9;
  function innerScope() {
    console.log("parent scope", num);
    console.log("global scope", globalVar);
  }
  innerScope();
}
// outerScope();

// What can a function return?

function returningTest() {
  return "string";
}
// returningTest();

// CLOSURE
function outer() {
  let num = 9;
  return function() {
    console.log("parent scope", num);
    num++;
    return num;
  };
}
let outerReturn = outer();

// What is a closure?

// ADDTION EXAMPLE
// let add = outer(10);
// add(10) // returns 20;

// ACCOUNT EXAMPLE
// let balance = 9;
// balance += 100;
// console.log(balance)

// balance =  10000000000000000

function account() {}

// What are the benefits of using closures?

// PIZZA EXAMPLE
// Create a closure that builds a pizza

// should create an array of toppings
// inner function should add a topping to the array
// inner function should return the updated array of toppings
function pizzaBuilder() {}

// MODULE PATTERN //

// How many things can a function return?

// What is the module pattern?

// READ AND WRITE EXAMPLE

function outer() {
  let data = 1200;
  return function() {
    return data;
  };
}

// **** CONTEXT **** //

// What is context?

// The 'this' keyword is a pronoun for objects
let obj = {
  name: "Beth",
  sayHi: function() {
    return `Hi, Beth`;
  }
};

// Three ways to determine context
// Implicit

// Explicit

// Default

// EXAMPLES

let dog = {
  color: "brown",
  age: 3,
  energy: 3,
  description: function() {
    return `This dog is ${this.color}. This dog is ${
      this.age
    } years old. This dog has ${this.energy > 5 ? "high" : "low"} energy`;
  }
};
// What happens if I run this line?
// dog.description();

// What happens if I run these lines?
let description = dog.description;
// description();

// What if we add these global variables?
// let color = 'black';
// let age = 2;
// let energy = 7;
// description();

let implicitObj = {
  value: "first",
  sayHi: function() {
    return this.value;
  }
};

// implicitObj.sayHi();

let newObj = {
  value: "second"
};

let explicit = implicitObj.sayHi.bind(newObj);
// What happens if I run this line?
// explicit();

// What is the order of priority when defining 'this'?

// ARROW FUNCTIONS //

let cat = {
  name: "Fluffy",
  sayName: () => {
    return this.name;
  }
};
// What happens if I run this line?
// cat.sayName();

let nestingObj = {
  name: "I am the first obj",
  fn: function() {
    console.log("first function this -->", this);
    return function() {
      return this;
    };
  }
};
// What happens if I run these lines?
// let innerFn = nestingObj.fn();
// innerFn();

let nestingObj2 = {
  name: "I am the second obj",
  fn: function() {
    console.log("first function this -->", this);
    return () => {
      return this;
    };
  }
};
// What happens if I run these lines?
// let innerFn2 = nestingObj2.fn();
// innerFn2();

// **** CONSTRUCTORS **** //

// What is a constructor function?

// CAR EXAMPLE
// Regular function

// Constructor function

// PROTOTYPES //

function CarMaker(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.register = function() {
    console.log(this.make, "has been registered");
  };
}

// Invoke CarMaker and look at the properties of the object

// Move register to the prototype

// **** CLASSES **** //

// CAR EXAMPLE

// What are the differences between a class constructor and a constructor function?
