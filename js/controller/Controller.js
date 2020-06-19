class Controller {

    constructor(document) {
        this.document = document;
        this.canvas = document.getElementById('canvas');
        this.pongGame = new PongGame(720,460,20)
        this.mouseControl = new MouseControl(document, this.pongGame.paddle_one);
        this.keyboardControl = new KeyboardControl(document, this.pongGame.paddle_two);
        this.pongGameView = new PongGameView(this.pongGame,this.canvas);
    }


}