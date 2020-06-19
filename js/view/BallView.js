class BallView extends CircleView {

    constructor(ball, fillColor, outlineColor, canvas) {
        super(ball.figure, fillColor, outlineColor, canvas)
    }

    render() {
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.arc(this.figure.posX, this.figure.posY, this.figure.radius, 0, Math.PI * 2);
        context.fillStyle = this.fillColor;
        context.fill();
        context.closePath();
    }
}