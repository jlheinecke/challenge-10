class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
    this.width = this.base;
    this.height = this.height;
  }

  setColor(color) {
    this.color = color;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }

  calculateSvg() {
    const shapeSvg = `<polygon points="150, 18 244, 182 56, 182" />`;
    
    return shapeSvg;
  }
  render() {
    
    const svgString = this.calculateSvg();
    return svgString;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.width = this.radius * 2;
    this.height = this.radius * 2;
  }

  setColor(color) {
    this.color = color;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculateSvg() {
    const shapeSvg = `<circle cx="2" cy="2" r="2" />`;
    return shapeSvg;
  }
  render() {
    
    const svgString = this.calculateSvg();
    return svgString;
  }
}

class Square {
  constructor(side) {
    this.side = side;
    this.width = this.side;
    this.height = this.side;
  }

  setColor(color) {
    this.color = color;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculateSvg() {
    const shapeSvg = `<rect width="2" height="2" />`;
    return shapeSvg;
  }
  render() {
    
    const svgString = this.calculateSvg();
    return svgString;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square
}
