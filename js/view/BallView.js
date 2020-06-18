class BallView extends CircleView{

        constructor(ball,fillColor,outlineColor,canvas){
            super(new CircleView(ball.figure,fillColor,outlineColor,canvas))
        }
}