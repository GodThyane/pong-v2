class AnimatedFigure {

    constructor(figure, direction, stepX, stepY) {
        if (this.constructor === AnimatedFigure) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.figure = figure;
        this.direction = direction;
        this.stepX = stepX;
        this.stepY = stepY;
    }

    move() {
        throw new Error("Method 'move()' must be implemented.");
    }

}
