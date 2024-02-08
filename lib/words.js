class Words {
    constructor(textColor) {
        this.textColor = "";
    }
    setColor(textColor) {
        this.textColor = textColor;
    }
}
class Letters extends Words {
    constructor(letters) {
        super();
        
        this.letters = letters;
    }

    render() {
        return `>${this.letters}`;
    }
}


module.exports = { Letters };