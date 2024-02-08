// const { Letters } = require('./words.js');
// const Shapes = require('./shapes.js');


function createSVG(letters, shapes, textColor, shapeColor) {
    const words = letters.render();
    
    const totalFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapes} fill="${shapeColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"${words}</text>
    </svg>`;
    
    
    return totalFile;
    
}

module.exports = { createSVG };