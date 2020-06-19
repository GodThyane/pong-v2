class Paddle extends AnimatedFigure {

    constructor(posX, posY, height, width, direction, step) {
        super(new Rectangle(posX, posY, height, width), direction, step);
    }

    move() {
        switch (this.direction) {
            case 'UP':
                this.figure.posY -= this.step;
                break;
            case 'DOWN':
                this.figure.posY += this.step;
                break;
            default:
                break;
        }
        this.direction = ' '
    }

}
