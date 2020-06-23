class PongGameView {

    constructor(pongGame, canvas) {
        this.canvas = canvas;
        this.pongGame = pongGame;
        this.ballView = new BallView(this.pongGame.ball, 'blue', 'black', this.canvas);
        this.paddleOneView = new PaddleView(this.pongGame.paddleOne, 'red', 'black', this.canvas);
        this.paddleTwoView = new PaddleView(this.pongGame.paddleTwo, 'red', 'black', this.canvas);
        this.scoreView = new ScoreView('red',this.canvas,'30px Comic Sans MS',this.pongGame.playerOne, this.pongGame.playerTwo);
    }

    render() {
        let context = this.canvas.getContext('2d');
        context.clearRect(
            this.pongGame.gameArea.posX, this.pongGame.gameArea.posY,
            this.pongGame.gameArea.width, this.pongGame.gameArea.height
        );
        this.paddleOneView.render();
        this.paddleTwoView.render();
        this.ballView.render();
        this.scoreView.render();
    }
}
