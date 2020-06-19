class MouseControl extends Control{

    constructor(document, animatedFigure) {
        super(document,animatedFigure);
        this.document.addEventListener("mousemove", e => this.move(e), false);
    }

    move(event) {
        if(event.clientY < this.animatedFigure.figure.posY)
            this.figure.direction = 'UP';

        if(event.clientY > this.animatedFigure.figure.posY + this.animatedFigure.height)
            this.figure.direction = 'DOWN';
    }

}