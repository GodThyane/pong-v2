/**
 * Figure
 * @Class Figure
 **/

class Figure {

    constructor(posX, posY, height, width) {
        if (this.constructor === Figure) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.posX = posX;
        this.posY = posY;
        this.height = height;
        this.width = width;
    }

    getArea() {

    }

    isInside(posX, posY) {

    }

    contains(figure) {

    }

}
