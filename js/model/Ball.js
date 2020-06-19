/**
 * Ball
 * @class Ball
 **/
class Ball extends AnimatedFigure {

    constructor(posX, posY, radius, direction, stepX, stepY) {
        super(new Circle(posX, posY, radius), direction, stepX, stepY);
    }

    move() {
        this.figure.posX += this.stepX;
        this.figure.posY += this.stepY;
    }

}
