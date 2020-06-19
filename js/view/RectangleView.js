class RectangleView extends FigureView{

    constructor(rectangle,fillColor,outlineColor,canvas){
        super(rectangle,fillColor,outlineColor,canvas)
        
    }

    render(){
        let context = this.canvas.getContext('2d');
        context.beginPath();
        context.rect(this.rectangle.posX, this.rectangle.posY, this.rectangle.width, this.rectangle.height);
        context.fillStyle = this.fillColor;
        context.fill();
        context.closePath();
    }
}