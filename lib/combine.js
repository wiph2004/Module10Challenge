

class Combine  {
    constructor(children = []) {
        this.children = children;
    }
    renderHTML() {

        return this.children
            .map ((child) => {
                if (typeof child === 'string') {
                    return child;
                }
                return child.render();
            })
    }
}

module.exports = Combine;