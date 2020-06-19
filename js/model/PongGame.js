class PongGame {

    MAX_WIN_SCORE = 21;
    MIN_WIN_SCORE = 3;

    constructor(height, width, winScore) {
        this.gameArea = new Rectangle(0, 0, height, width);
        this.winScore = winScore;
        this.initializeGame()
    }

    update() {
        this.checkCollisions();
        this.moveFigures();
        this.updateScores();
    }

    checkCollisions() {


    }

    moveFigures() {
        this.paddleOne.move();
        this.paddleTwo.move();
        this.ball.move();
    }

    isGameOver() {


    }

    initializeGame() {
        let paddleHeight = this.gameArea.height * 0.25;
        let paddleY = this.gameArea.height / 2 - paddleHeight;
        this.ball = new Ball(50, 50, 10, Math.random() * 360, 1);
        this.paddleOne = new Paddle(this.gameArea.posX + 10, paddleY, paddleHeight, 15, ' ', 5);
        this.paddleTwo = new Paddle(this.gameArea.width - 25, paddleY, paddleHeight, 15, ' ', 5);
        this.playerOne = new Player("Player 1", 0);
        this.playerTwo = new Player("Player 2", 0);
    }

    initializeRound() {


    }

    updateScores() {


    }

}
