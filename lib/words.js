class Words{
constructor() {
    this.textColor = "";
}
setColor(textColor) {
    this.textColor = textColor;
}
render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letters}</text>`;
}
}


module.exports = Words;