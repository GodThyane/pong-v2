class CircleView extends FigureView {

    constructor(circle, fillColor, outlineColor, canvas) {
        super(circle, fillColor, outlineColor, canvas)
    }

    render() {
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.rect(this.figure.posX, this.figure.posY, this.figure.width, this.figure.height);
        context.closePath();
    }
}
