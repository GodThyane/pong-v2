class BallView extends CircleView {

    constructor(ball, fillColor, outlineColor, canvas) {
        super(ball.figure, fillColor, outlineColor, canvas)
    }

    render() {
        let context = canvas.getContext('2d');
        context.beginPath();
        context.rect(this.figure.posX, this.figure.posY, this.figure.width, this.figure.height);
        context.fillStyle = this.fillColor;
        context.fill();
        context.closePath();
    }
}