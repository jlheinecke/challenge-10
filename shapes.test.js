
const { Triangle, Circle, Square } = require('./shapes');

describe('Shape Classes', () => {
  describe('Triangle', () => {
    it('renders an SVG string for a triangle with color', () => {
      const triangle = new Triangle(100, 150);
      triangle.setColor('blue');
      const svgString = triangle.render();
      expect(svgString).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" />'
      );
    });
  });

  describe('Circle', () => {
    it('renders an SVG string for a circle with color', () => {
      const circle = new Circle(2);
      circle.setColor('blue');
      const svgString = circle.render();
      expect(svgString).toEqual(
        '<circle cx="2" cy="2" r="2" />'
      );
    });
  });

  describe('Square', () => {
    it('renders an SVG string for a square with color', () => {
      const square = new Square(2);
      square.setColor('blue');
      const svgString = square.render();
      expect(svgString).toEqual(
        '<rect width="2" height="2" />'
      );
    });
  });
 });
