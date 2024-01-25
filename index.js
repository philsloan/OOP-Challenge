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

