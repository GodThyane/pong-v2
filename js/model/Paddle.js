class Paddle extends AnimatedFigure{

    constructor(posX, posY, height, width, direction, step) {
        super(new Rectangle(posX,posY,height,width), direction,step);
    }

    move() {
        super.move();
    }

}