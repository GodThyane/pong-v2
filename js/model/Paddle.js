class Paddle extends AnimatedFigure {

    constructor(posX, posY, height, width, direction, step) {
        super(new Rectangle(posX, posY, height, width), direction, 0, step);
    }

    move() {
        switch (this.direction) {
            case 'UP':
                this.figure.posY -= this.stepY;
                break;
            case 'DOWN':
                this.figure.posY += this.stepY;
                break;
            default:
                break;
        }
        this.direction = ' '
    }

}
