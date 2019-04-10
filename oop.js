//**************************Object literal
/* ****************************************************************************

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw object literal");
  }
};

circle.draw();



**************************************************************************** */
//**************************Factory function
/* ****************************************************************************

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw factory function");
    }
  };
}

const circle = createCircle(1);
circle.draw();



**************************************************************************** */
//**************************Constructor function
/* ****************************************************************************

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw consructor function");
  };
}

const circle = new Circle(1);
circle.draw();



**************************************************************************** */
//**************************Function are objects
/* ****************************************************************************

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw consructor function");
  };
}

const CircleTwo = new Function(
  "radius",
  `this.radius = radius;
this.draw = function() {
  console.log("draw consructor function  two");
};`
);

const circle = new Circle(1);
const circleTwo = new CircleTwo(1);
circle.draw();
circleTwo.draw();
console.log(circleTwo); //Output object: {radius: 1, draw: ƒ}



**************************************************************************** */
//**************************Values vs Reference Types
/* ****************************************************************************

let number = 10;
function inc(num) {
  num++;
}
inc(number);
console.log(number); // 10

let obj = { value: 10 };
function inc(obj) {
  obj.value++;
}
inc(obj);
console.log(obj.value); // 11



**************************************************************************** */
//**************************Delete property/method from an object
/* ****************************************************************************

const obj = { a: 10, b: 10 };
delete obj.a;
console.log(obj); //{b: 10}



**************************************************************************** */
//**************************Enummerating Poperities
/* ****************************************************************************

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw consructor function");
  };
}

circle = new Circle(10);

//First method
for (let key in circle) {
  console.log(key); // radius, draw
}

//Second method
const keys = Object.keys(circle);
console.log(keys); //(2) ["radius", "draw"]

//Third method
if ("radius" in circle) {
  console.log("There is a radius property in a circle object");
}



**************************************************************************** */
//**************************Abstraction (Hide details, show essentials)
/* ****************************************************************************

function Circle(radius) {
  this.radius = radius;
  let secretRadius = 20;
  this.draw = function() {
    secretRadius;
    console.log("draw consructor function");
  };
}

circle = new Circle(10);
console.log(circle.secretRadius, circle.radius); // undefined 10


**************************************************************************** */

function StopWatch() {
  let startTime,
    endTime,
    duration = 0;
  let running = false;

  this.start = function() {
    if (running) {
      throw new Error("StopWatch has already started!");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error("StopWatch is already stopped!");
    }
    running = false;
    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
    console.log(duration);
  };

  this.reset = function() {
    running = false;
  };
}
