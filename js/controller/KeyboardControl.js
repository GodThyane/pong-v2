class KeyboardControl extends Control{

    constructor(document, animatedFigure) {
        super(document, animatedFigure);
        this.document.addEventListener("keydown", e => this.updateFigure(e), false);
        this.document.addEventListener("keyup", e => this.updateFigure(e), false);
    }

    updateFigure(event) {
        this.animatedFigure.direction = (event.keyCode === 38) ? 'UP': 'DOWN';
    }
}
