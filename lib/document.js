const Words = require('./words.js');
const Shapes = require('./shapes.js');
const { writeFile } = require('fs');
const { join } = require('path');

function createSVG(Words, Shapes) {
    const words = new Words().render();
    const shape = new Shapes().render();
    const totalFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${words}${shape}</svg>`;
    
    return totalFile;
    
}

module.exports = createSVG();