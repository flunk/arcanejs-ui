class Img extends Element {
    constructor(src, className, id) {
        super("img" ,className, id);
      	this.element.src = src;
    }
}