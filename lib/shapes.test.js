
const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  describe('Triangle', () => {
    it('calculates the area of a triangle correctly', () => {
      const triangle = new Triangle(5, 8);
      expect(triangle.calculateArea()).toBe(20); 
    });
  });

  describe('Circle', () => {
    it('calculates the area of a circle correctly', () => {
      const circle = new Circle(3);
      expect(circle.calculateArea()).toBeCloseTo(28.274); 
    });
  });

  describe('Square', () => {
    it('calculates the area of a square correctly', () => {
      const square = new Square(4);
      expect(square.calculateArea()).toBe(16);
    });
  });
});
