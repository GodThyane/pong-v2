class PongGameView{

    constructor(pongGame,canvas){
        this.canvas = canvas;
        this.pongGame = pongGame;
        this.ballView = new BallView(this.pongGame.ball,'blue','black',this.canvas);
        this.paddleOneView = new PaddleView(this.pongGame.paddle_one,'red','black',this.canvas);
        this.paddleTwoView = new PaddleView(this.pongGame.paddle_two,'red','black',this.canvas);
    }

    render(){
        let context = this.canvas.getContext('2d');
        context.clearRect(this.pongGame.game_area.posX, this.pongGame.game_area.posY, this.pongGame.width, this.pongGame.height);
        this.paddleOneView.render();
        this.paddleTwoView.render();
        this.ballView.render();
    }
}