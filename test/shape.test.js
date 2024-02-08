const { Circle, Square, Triangle} = require('../lib/shapes.js');

describe('Triangle', () => {

    it('should take a variable that equals Triangle and return the size', () => {
        const shape = `<polygon points="200,10 250,190 150,190"`;
        const newShape = new Triangle().render();
        expect(newShape).toEqual(shape);
    })
})