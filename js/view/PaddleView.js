class PaddleView extends RectangleView{

constructor(paddle,fillColor,outlineColor,canvas){
    super(paddle.figure,fillColor,outlineColor,canvas)
}
   
    render(){
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.rect(this.figure.posX, this.figure.posY, this.figure.width, this.figure.height);
        context.fillStyle = this.fillColor;
        context.fill();
        context.closePath();
    }

}