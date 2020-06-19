class KeyboardControl extends Control{

    constructor(document, animatedFigure) {
        super(document, animatedFigure);
        this.document.addEventListener("keydown", e => this.move(e))
    }

    updateFigure(event) {
        this.animatedFigure.direction = (event.keyCode === 38) ? 'UP': 'DOWN';
    }

}