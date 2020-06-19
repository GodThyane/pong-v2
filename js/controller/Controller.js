class Controller {

    constructor(document) {
        let canvas = document.getElementById('canvas_pong');
        this.pongGame = new PongGame(canvas.height, canvas.width, 3)
        this.mouseControl = new MouseControl(document, this.pongGame.paddleOne);
        this.keyboardControl = new KeyboardControl(document, this.pongGame.paddleTwo);
        this.pongGameView = new PongGameView(this.pongGame, canvas);
    }

    gameLoop() {
        this.update();
        this.render();
    }

    update() {
        this.pongGame.update();
    }

    render() {
        this.pongGameView.render();
    }
}

let controller = new Controller(document);

function gameLoop() {
    controller.gameLoop();
    requestAnimationFrame(gameLoop);
}

gameLoop();
