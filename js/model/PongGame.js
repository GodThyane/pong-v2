class PongGame {

    MAX_WIN_SCORE = 21;
    MIN_WIN_SCORE = 3;

        constructor(height, width, winScore) {

        this.height = height;
        this.width = width;

        let paddleHeight = this.height * 0.25;
        let paddleY = this.height / 2 - paddleHeight;

        this.winScore = winScore;
        this.ball = new Ball(50,50,10 , Math.random()*360, 1);
        this.paddle_one = new Paddle(10,paddleY, paddleHeight,15, 5, ' ');
        this.paddle_two = new Paddle(this.width - 25,paddleY, paddleHeight,15, 5, ' ');
        this.game_area = new Rectangle(0,0,height,width);
        this.player_one = new Player("Player 1", 0);
        this.player_two = new Player("Player 2", 0);
    }

    update(){
        this.checkCollisions();
        this.moveFigures();
        this.updateScores();
    }

    checkCollisions(){


    }

    moveFigures(){
        this.paddle_one.move();
        this.paddle_two.move();
        this.ball.move();
    }

    isGameOver(){


    }

    initializeGame(){


    }

    initializeRound(){


    }

    updateScores(){


    }

}