class Link extends Element {
    constructor(id, className, href){
		super("a", id, className);
      	if(href){
          	this.element.href = href;
        }
      	
    }
};  