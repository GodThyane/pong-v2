/**
 * Ball
 * @class Ball
 **/
class Ball extends AnimatedFigure{

    constructor(posX, posY, radius, direction, step) {
        super(new Circle(posX, posY, radius), direction, step)
    }

    move() {
        super.move();
    }

}