const inquirer = require('inquirer');
const fs = require('fs');

// app.js

const { Triangle, Circle, Square } = require('./shapes');

const triangle = new Triangle(5, 8);
const circle = new Circle(3);
const square = new Square(4);

console.log('Triangle area:', triangle.calculateArea());
console.log('Circle area:', circle.calculateArea());
console.log('Square area:', square.calculateArea());

