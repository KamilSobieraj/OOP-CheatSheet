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
