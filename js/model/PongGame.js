class PongGame {

    MAX_WIN_SCORE = 21;
    MIN_WIN_SCORE = 3;

    constructor(height, width, winScore) {
        this.gameArea = new Rectangle(0, 0, height, width);
        if (winScore < this.MIN_WIN_SCORE || this.winScore > this.MAX_WIN_SCORE)
            throw new Error(`Win score must be between ${this.MIN_WIN_SCORE} and ${this.MAX_WIN_SCORE}`);
        this.winScore = winScore;
        this.ball = new Ball(50, 50, 10, ' ', -5, 5);
        let paddleHeight = this.gameArea.height * 0.25;
        let paddleY = this.gameArea.height / 2 - paddleHeight;
        this.paddleOne = new Paddle(this.gameArea.posX + 10, paddleY, paddleHeight, 15, ' ', 10);
        this.paddleTwo = new Paddle(this.gameArea.width - 25, paddleY, paddleHeight, 15, ' ', 10);
        this.initializeGame();
    }

    update() {
        this.checkCollisions();
        this.moveFigures();
        this.updateScores();
    }

    checkCollisions() {
        if (this.ball.figure.posY < this.gameArea.posY || this.ball.figure.posY > this.gameArea.height)
            this.ball.stepY *= -1;
        if (
            this.isBallInPaddle(this.paddleOne) //PADDLE ONE LIMITS
            || this.isBallInPaddle(this.paddleTwo)//PADDLE TWO LIMITS
        )
            this.ball.stepX *= -1;

    }

    isBallInPaddle(paddle) {
        return this.ball.figure.posY > paddle.figure.posY
            && this.ball.figure.posY < paddle.figure.height + paddle.figure.posY
            && this.ball.figure.posX > paddle.figure.posX
            && this.ball.figure.posX < paddle.figure.width + paddle.figure.posX
    }

    moveFigures() {
        this.paddleOne.move();
        this.paddleTwo.move();
        this.ball.move();
        if(this.isGameOver())   {
            alert(`El ganador es ${(this.playerOne.score > this.playerTwo.score) ? 'Jugador 1' : 'Jugador 2'}`)
            this.initializeGame();
        }
    }

    isGameOver() {
        return this.playerOne.score >= this.winScore || this.playerTwo.score >= this.winScore;
    }

    initializeGame() {
        this.playerOne = new Player("Player 1", 0);
        this.playerTwo = new Player("Player 2", 0);
        this.initializeRound();
    }

    initializeRound() {
        this.ball.figure.posX = this.gameArea.width / 2 - this.ball.figure.radius;
        this.ball.figure.posY = this.gameArea.height / 2 - this.ball.figure.radius;
        this.ball.stepY *= -1;
        this.ball.stepX *= -1;
    }

    updateScores() {
        if (this.ball.figure.posX < this.gameArea.posX) {
            this.playerTwo.addScore(1);
            alert('Punto para Jugador 2');
            this.initializeRound();
        }
        if (this.ball.figure.posX > this.gameArea.width - this.ball.figure.width) {
            this.playerOne.addScore(1);
            alert('Punto para Jugador 1')
            this.initializeRound();
        }
    }

}
