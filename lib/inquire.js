const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { createDocument } = require('./document');
const { Circle, Square, Triangle } = require('./shapes');
const { create } = require('domain');

class INQ {
    constructor(){
        this.shape = [];
        this.letter = [];
    }
    run() {
        return inquirer
            .createPromptModule([
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
                        if(input.length > 3){
                            return "Please only input 3 or less letters";
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please input shape color',
                    validate: (input) => {
                        if(input === letters){
                            return "Please input a different color than letters."
                        }
                        return true;
                    }
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please input a shape',
                    choices: [Circle, Square, Triangle],
                    validate: (input) => {
                        if (input === Circle) {
                            shape = new Circle();
                        }
                        if (input === Square) {
                            shape = new Square;
                        }
                        else {
                            shape = new Triangle();
                        }
                    }
                },
            ])
            
            .then ((response) => {
                console.log(response);
                const letters = new Words(letters);
                createSVG(letters, shape);

            })
            return writeFile(
                join(__dirname, '..', output, 'logo.svg'),
                createDocument(totalFile)
            );
    }
}

module.exports = INQ;