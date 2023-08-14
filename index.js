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
//     const { text, textColor, shape, shapeColor } = await getUserInput();
  
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
//       <svg width="${shapeInstance.width}" height="${shapeInstance.height}" xmlns="http://www.w3.org/2000/svg">
//         ${shapeSvg}
//       </svg>
//     `;
  
//     fs.writeFileSync('logo.svg', svgContent);
  
//     console.log('SVG file saved as logo.svg');
//     console.log('Generated logo.svg');
  
//     await open('logo.svg', { wait: true });
//   }
  
//   main();
  
import cli from './lib/cli.js';
import fs from 'fs';
import { Triangle, Circle, Square } from './lib/shapes.js';
import open from 'open';

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
    let continuePrompt;
  
    do {
      const { text, textColor, shape, shapeColor } = await getUserInput();

    let shapeInstance;

    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(50); // You can adjust the radius value
        break;
      case 'triangle':
        shapeInstance = new Triangle(100, 100); // You can adjust the base and height values
        break;
      case 'square':
        shapeInstance = new Square(100); // You can adjust the side value
        break;
      default:
        console.log('Invalid shape');
        return;
    }

    const shapeSvg = shapeInstance.calculateSvg(text, textColor, shapeColor);

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${shapeInstance.width} ${shapeInstance.height}">
      ${shapeSvg}
    </svg>
  `;

    fs.writeFileSync('logo.svg', svgContent);

    console.log('SVG file saved as logo.svg');
    console.log('Generated logo.svg');

    await open('logo.svg');

    continuePrompt = await cli.prompt([
      {
        type: 'confirm',
        name: 'continue',
        message: 'Generate another logo?',
        default: true,
      },
    ]);

    if (!continuePrompt.continue) {
      console.log('Goodbye!');
    }
  } while (continuePrompt.continue);
}

main();
