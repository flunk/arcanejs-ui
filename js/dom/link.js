class Link extends Element {
    constructor(href, className, id){
	super("a", className, id);
      	if(href){
            this.element.href = href;
        }
    }
}
