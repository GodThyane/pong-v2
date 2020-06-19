class Control {

    constructor(document, animatedFigure) {
        if (this.constructor === Control) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.document = document;
        this.animatedFigure = animatedFigure;
    }

    updateFigure() {
        throw new Error("Method 'move()' must be implemented.");
    }
}
