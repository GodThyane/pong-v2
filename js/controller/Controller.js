class Controller {

    constructor(document) {
        this.document = document;
        let canvas = document.getElementById('canvas_pong');
        this.pongGame = new PongGame(canvas.height, canvas.width,20)
        this.mouseControl = new MouseControl(document, this.pongGame.paddle_one);
        this.keyboardControl = new KeyboardControl(document, this.pongGame.paddle_two);
        this.pongGameView = new PongGameView(this.pongGame, canvas);
    }

    gameLoop(){
        this.update();
        this.render();
    }

    update(){
        this.pongGame.update();

    }

    render(){

        this.pongGameView.render();

    }

}

let controller = new Controller(document);

function gameLoop()  {
    controller.gameLoop();
    requestAnimationFrame(gameLoop);
}

gameLoop();
