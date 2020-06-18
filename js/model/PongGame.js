class PongGame {

    MAX_WIN_SCORE = 21;
    MIN_WIN_SCORE = 3;

    constructor(height, width, winScore) {

        this.winScore = winScore;
        this.ball = new Ball(10,10,20 , Math.random()*360, 7);
        this.paddle_one = new Paddle(10,20, 10,30, 90, 7);
        this.paddle_two = new Paddle(50,20, 10,30, 90, 7);
        this.game_area = new Rectangle(300,300,900,500);
        this.player_one = new Player("Player 1", 0);
        this.player_two = new Player("Player 2", 0);
    }

    update(){

    }

    checkCollisions(){


    }

    moveFigures(){


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