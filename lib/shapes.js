export class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
    this.width = this.base;
    this.height = this.height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }

  calculateSvg(text, textColor, shapeColor) {
    const shapeSvg = `
      <polygon points="0,${this.height} ${this.base},${this.height} ${this.base / 2},0" fill="${shapeColor}" />
      <text x="${this.base / 2}" y="${this.height / 2}" fill="${textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${text}</text>
    `;
    return shapeSvg;
  }
}

export class Circle {
  constructor(radius) {
    this.radius = radius;
    this.width = this.radius * 2;
    this.height = this.radius * 2;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculateSvg(text, textColor, shapeColor) {
    const shapeSvg = `
      <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${shapeColor}" />
      <text x="${this.radius}" y="${this.radius}" fill="${textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${text}</text>
    `;
    return shapeSvg;
  }
}

export class Square {
  constructor(side) {
    this.side = side;
    this.width = this.side;
    this.height = this.side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculateSvg(text, textColor, shapeColor) {
    const shapeSvg = `
      <rect width="${this.side}" height="${this.side}" fill="${shapeColor}" />
      <text x="${this.side / 2}" y="${this.side / 2}" fill="${textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${text}</text>
    `;
    return shapeSvg;
  }
}

  