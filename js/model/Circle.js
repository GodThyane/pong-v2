class Circle extends Figure{

    constructor(posX, posY, radius) {
        super(posX, posY, 2 * radius, 2 * radius);
        this.radius = radius;
        this.posX = posX;
        this.posY = posY;
    }

    getArea() {
        super.getArea();
    }

    isInside(posX, posY) {
        super.isInside(posX, posY);
    }

    contains(figure) {
        super.contains(figure);
    }
}