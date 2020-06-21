class ScoreView {

    constructor(fillColor, canvas, font, pongGame) {
        this.font = font;
        this.fillColor = fillColor;
        this.canvas = canvas;
        this.pongGame = pongGame;
    }

    render() {
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.font = this.font;
        context.fillStyle = this.fillColor;
        context.fillText("Score", (this.canvas.width/2) - this.canvas.width * 0.04, this.canvas.height * 0.05);
        context.fillText(this.pongGame.playerOne.score, this.canvas.width/2 - (this.canvas.width/10), this.canvas.height/8);
        context.fillText(" | ", this.canvas.width/2, this.canvas.height/8);
        context.fillText(this.pongGame.playerTwo.score, this.canvas.width/2 + (this.canvas.width/10), this.canvas.height/8);
        context.fill();
        context.closePath();
    }
}
