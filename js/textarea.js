class Textarea extends Element {
    constructor(text, className, id) {
        super("textarea", className, id);
      	//
      	this.element.value = text;
      	this.element.rows = 1;
    }
  
  	set autoResize(bool){
       	if(bool){      	
          	this.element.addEventListener('input', this.resizeEventHandler, false);
          	this.resize();
        } else {
        	this.element.removeEventListener('input',  this.resizeEventHandler, false); //Does this even work???
        }
    }
  
  	resize(){
      	this.element.style.height = 'auto';
      	this.element.style.height = this.element.scrollHeight+'px';
    }
  	
    resizeEventHandler (event) {
      	event.target.style.height = 'auto';
      	event.target.style.height = event.target.scrollHeight+'px';
      	return false;
    }
}