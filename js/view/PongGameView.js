class PongGameView{

    constructor(pongGame,canvas){
        this.canvas = canvas;
        this.pongGame = pongGame;
        this.ballView = new BallView(this.pongGame.ball);
        this.paddleOneView = new PaddleView(this.pongGame.paddle_one);
        this.paddleTwoView = new PaddleView(this.pongGame.paddle_two);
    }

    render(){

    }
}