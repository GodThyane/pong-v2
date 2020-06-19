class FigureView {

    constructor(figure, fillColor, outlineColor, canvas) {
        if (this.constructor === FigureView) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.fillColor = fillColor;
        this.outlineColor = outlineColor;
        this.canvas = canvas;
        this.figure = figure;
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}
