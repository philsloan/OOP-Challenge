const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes/shapes.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter three characters.',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Enter text color.',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Choose a shape from the list below.',
            choices: ['Triangle', 'Circle', 'Square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: "Enter the shape's color.",
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        let shapeInstance;

        switch (response.shape) {
            case 'Triangle':
                shapeInstance = new Triangle(response.characters, response.shapeColor, response.textColor);
                break;
            case 'Circle':
                shapeInstance = new Circle(response.characters, response.shapeColor, response.textColor);
                break;
            case 'Square':
                shapeInstance = new Square(response.characters, response.shapeColor, response.textColor);
                break;
            default:
                throw new Error('Invalid shape');
        }

        fs.writeFile('./examples/logo.svg', shapeInstance.render(), (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Generated logo.svg");
            }
        });
    });






// const inquirer = require('inquirer');
// const fs = require('fs');
// const { Triangle, circle, square } = require('./shapes/shapes.js');


// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'Enter three characters.',
//             name: 'characters',
//         },
//         {
//             type: 'input',
//             message: 'Enter text color.',
//             name: 'textColor',
//         },
//         {
//             type: 'shapelist',
//             message: 'Choose a shape from the list below.',
//             choices: [
//                 { name: 'Triangle', value: 'Triangle' },
//                 { name: 'Circle', value: 'Circle' },
//                 { name: 'Square', value: 'Square' },
                
//             ],
//             name: 'shape',
//         },
//         {
//             type: 'input',
//             message: "Enter the shape's color.",
//             name: 'shapeColor',
//         },
//     ])
//     .then((response) => {
//         if (response.shape === 'Triangle') {
//             const triangle = new Triangle(response.characters, response.shapeColor, response.textColor)
//             fs.writeFile('./examples/logo.svg', triangle.render(), (error) => {
//                 if (error) {
//                     console.error(error);
//                 }
//             });
//         } else if (response.shape === 'Circle') {
//             const circle = new Circle(response.characters, response.shapeColor, response.textColor)
//             fs.writeFile('./examples/logo.svg', circle.render(), (error) => {
//                 if (error) {
//                     console.error(error);
//                 }
//             })
//         } else {
//             const square = new Square(response.characters, response.shapeColor, response.textColor)
//             fs.writeFile('./examples/logo.svg', square.render(), (error) => {
//                 if (error) {
//                     console.error(error);
//                 }
//             })
//         }
//     })
//     .then(() => {
//         return console.log("Generated logo.svg")
//     })