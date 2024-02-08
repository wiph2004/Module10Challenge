const INQ = require('./questions');

class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes {
    // constructor(shapeColor) {
    //     super(shapeColor);
        
    //     this.shape = shape;
    // }
    render() {
        return `<circle cx="125" cy="125" r="75"`;
        //fill="${this.shapeColor}/>
    }
}

class Square extends Shapes {
    // constructor(shape) {
    //     super();
        
    //     this.shape = shape;
    // }
    render() {
        return `<rect x="25" y="25" width="200" height="200"`;
        //fill="${this.shapeColor}"  />stroke-width="4" stroke="${ths.shapeColor}"
    }
}

class Triangle extends Shapes {
    // constructor(shape) {
    //     super();
        
    //     this.shape = shape;
    // }
    render() {
        return `<polygon points="200,10 250,190 150,190"`;
        //style="${this.shapeColor}/>;stroke:${this.shapeColor};stroke-width:3" 
    }
}

module.exports = {Circle, Triangle, Square};

