import cli from './cli.js';
import fs from 'fs';
import open from 'open';

class Triangle {
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
  
 class Circle {
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
  
 class Square {
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

async function getUserInput() {
  const userInput = await cli.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ]);

  return userInput;
}

async function main() {
    let logoCounter = 1;
  
    do {
      const { text, textColor, shape, shapeColor } = await getUserInput();
  
      let shapeInstance;
  
      switch (shape) {
        case 'circle':
          shapeInstance = new Circle(50);
          break;
        case 'triangle':
          shapeInstance = new Triangle(100, 100);
          break;
        case 'square':
          shapeInstance = new Square(100);
          break;
        default:
          console.log('Invalid shape');
          return;
      }
  
      const shapeSvg = shapeInstance.calculateSvg(text, textColor, shapeColor);
  
      const timestamp = Date.now();
      const filename = `logo_${timestamp}_${logoCounter}.svg`;
  
      const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${shapeInstance.width} ${shapeInstance.height}">
        ${shapeSvg}
      </svg>
    `;
  
      fs.writeFileSync(`./examples/${filename}`, svgContent);
  
      console.log(`SVG file saved as examples/${filename}`);
      console.log(`Generated ${filename}`);
  
      await open(`./examples/${filename}`);
  
      logoCounter++;
  
      const continuePrompt = await cli.prompt([
        {
          type: 'confirm',
          name: 'continue',
          message: 'Generate another logo?',
          default: true,
        },
      ]);
  
      if (!continuePrompt.continue) {
        console.log('Goodbye!');
        break;
      }
    } while (true);
  }
  
  main();




// import cli from './lib/cli.js';
// import fs from 'fs';
// import { Triangle, Circle, Square } from './lib/shapes.js';
// import open from 'open';

// async function getUserInput() {
//   const userInput = await cli.prompt([
//     {
//       type: 'input',
//       name: 'text',
//       message: 'Enter up to three characters:',
//       validate: (input) => {
//         if (input.length > 3) {
//           return 'Please enter up to three characters.';
//         }
//         return true;
//       },
//     },
//     {
//       type: 'input',
//       name: 'textColor',
//       message: 'Enter text color (keyword or hexadecimal number):',
//     },
//     {
//       type: 'list',
//       name: 'shape',
//       message: 'Choose a shape:',
//       choices: ['circle', 'triangle', 'square'],
//     },
//     {
//       type: 'input',
//       name: 'shapeColor',
//       message: 'Enter shape color (keyword or hexadecimal number):',
//     },
//   ]);

//   return userInput;
// }

// async function main() {
//     let continuePrompt;
  
//     do {
//       const { text, textColor, shape, shapeColor } = await getUserInput();

//     let shapeInstance;

//     switch (shape) {
//       case 'circle':
//         shapeInstance = new Circle(50); // You can adjust the radius value
//         break;
//       case 'triangle':
//         shapeInstance = new Triangle(100, 100); // You can adjust the base and height values
//         break;
//       case 'square':
//         shapeInstance = new Square(100); // You can adjust the side value
//         break;
//       default:
//         console.log('Invalid shape');
//         return;
//     }

//     const shapeSvg = shapeInstance.calculateSvg(text, textColor, shapeColor);

//     const svgContent = `
//     <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${shapeInstance.width} ${shapeInstance.height}">
//       ${shapeSvg}
//     </svg>
//   `;

//     fs.writeFileSync('logo.svg', svgContent);

//     console.log('SVG file saved as logo.svg');
//     console.log('Generated logo.svg');

//     await open('logo.svg');

//     continuePrompt = await cli.prompt([
//       {
//         type: 'confirm',
//         name: 'continue',
//         message: 'Generate another logo?',
//         default: true,
//       },
//     ]);

//     if (!continuePrompt.continue) {
//       console.log('Goodbye!');
//     }
//   } while (continuePrompt.continue);
// }

// main();
