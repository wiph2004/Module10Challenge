

class Shapes {
    constructor() {
        this.shapeColor = "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="125" cy="125" r="75" fill="${shapeColor}/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="25" y="25" width="200" height="200" fill="${shapeColor}" stroke-width="4" stroke="${shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="200,10 250,190 150,190" style="${shapeColor};stroke:${shapeColor};stroke-width:3" />`;
    }
}

module.exports = {Circle, Triangle, Square};

