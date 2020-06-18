class AnimatedFigure {

    constructor(figure, direction, step) {
        if (this.constructor === AnimatedFigure) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.figure = figure;
        this.direction = direction;
        this.step = step;
    }

    move() {

    }

}