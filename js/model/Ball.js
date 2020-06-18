/**
 * Ball
 * @class Ball
 **/
class Ball extends AnimatedFigure{

    constructor(posX, posY, radius, direction, step) {
        super(new Circle(posX, posY, radius), direction, step)
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
    }

    move() {
        super.move();
    }

}