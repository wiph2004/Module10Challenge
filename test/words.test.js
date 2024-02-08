const { Letters } = require('../lib/words.js');

describe('Letters', () => {

    it('should take a variable that has up to 3 letters in it and return an object', () => {
        const answer = `>${this.letters}`;
        const newLetters = new Letters().render();
        expect(newLetters).toEqual(answer);
    })
})