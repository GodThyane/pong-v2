class Paddle extends AnimatedFigure{

    constructor(posX, posY, height, width, direction, step) {
        super(new Rectangle(posX,posY,height,width), direction,step);
    }

    move() {
        switch(this.direction)  {
            case 'UP':
                this.posY -= this.step;
                break;
            case 'DOWN':
                this.posY += this.step;
                break;
            default:
                break;
        }
        this.direction = ' '
    }

}