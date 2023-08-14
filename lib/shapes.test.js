const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  describe('Triangle', () => {
    it('calculates the area of a triangle correctly', () => {
      const triangle = new Triangle(5, 8);
      expect(triangle.calculateArea()).toBe(20); 
    });

    it('renders an SVG string for a triangle with color', () => {
      const triangle = new Triangle(5, 8);
      triangle.setColor('blue');
      const svgString = triangle.render();
      expect(svgString).toEqual('<polygon points="x1, y1 x2, y2 x3, y3" fill="blue" />');
    });
  });

  describe('Circle', () => {
    it('calculates the area of a circle correctly', () => {
      const circle = new Circle(3);
      expect(circle.calculateArea()).toBeCloseTo(28.274); 
    });

    it('renders an SVG string for a circle with color', () => {
      const circle = new Circle(3);
      circle.setColor('red'); 
      const svgString = circle.render();
      expect(svgString).toEqual('<circle cx="centerX" cy="centerY" r="radius" fill="red" />'); 
    });
  });

  describe('Square', () => {
    it('calculates the area of a square correctly', () => {
      const square = new Square(4);
      expect(square.calculateArea()).toBe(16);
    });

    it('renders an SVG string for a square with color', () => {
      const square = new Square(4);
      square.setColor('green'); 
      const svgString = square.render();
      expect(svgString).toEqual('<rect x="x" y="y" width="sideLength" height="sideLength" fill="green" />'); 
    });
  });
});

