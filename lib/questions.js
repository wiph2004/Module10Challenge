const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { createDocument } = require('./document');
const { Circle, Square, Triangle } = require('./shapes');
const { createSVG } = require('./document');
const { Letters } = require('./words');

const shapeChoices = [
    'Circle',
    'Square',
    'Triangle'
];

class INQ {
    constructor() {
        this.shape = [];
        this.letter = [];
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please input text color',
                },
                {
                    type: 'input',
                    name: 'letters',
                    message: 'Please input up to 3 letters',
                    validate: (input) => {
                        if (input.length > 3) {
                            return "Please only input 3 or less letters";
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please input shape color',
                    // validate: (input) => {
                    //     if (input === letters) {
                    //         return "Please input a different color than letters."
                    //     }
                    //     return true;
                    // }
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please input a shape',
                    choices: shapeChoices,

                },
            ])

            .then((response) => {
                const { letters, shape, textColor, shapeColor } = response;

                console.log(response);
                // textColor = new Letters();
                
                let sColor;
                let renderShape;
                if (shape === 'Circle') {
                    // sColor = new Circle();
                    renderShape = new Circle().render();
                }
                else if (shape === 'Square') {
                    // sColor = new Square();
                    renderShape = new Square().render();
                }
                else if (shape === 'Triangle') {
                    // sColor = new Triangle();
                    renderShape = new Triangle().render();
                }

                const lettersObj = new Letters(letters);
                const totalFile = createSVG(lettersObj, renderShape, textColor, shapeColor);
                writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'),
                    totalFile
                ).then(() => console.log("Generated logo.svg"));
            })
    }
}

module.exports = INQ;