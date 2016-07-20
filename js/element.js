class Element {
    constructor(type, className, id){
		this.element = document.createElement(type);
  
        if(id != null){
            this.element.id = id;
        }

        if (className != null) {
            this.element.className = className;
        }
      
      	this.children = new Array();
    }

    //innerText/HTML stuff
    getText() {
        return this.element.innerText;
    }

    setText(text) {
        this.element.innerText = text;
      	return this;
    }
  
  	clear(){
   		this.element.innerHTML = "";  
    }


    //Style operations
    get x() {
        return this.element.offsetLeft;
    }

    set x(val) {
        this.element.style.left = val + "px";
    }

    get y() {
        return this.element.offsetTop;
    }

    set y(val) {
        this.element.style.top = val + "px";
    }

    get width() {
        let width = this.element.style.width;
        if (width == "") {
            return parseInt(styleWidth.replace("px", ""));
        } else {
            return this.element.offsetWidth;
        }
    }
  
  	addCssClass( cssClass ){
    	this.element.classList.add(	cssClass );
    }
  
  	removeCssClass( cssClass ){
    	this.element.classList.remove( cssClass );
    }


    set width(val) {
        this.element.style.width = val + "px";
    }

    get height() {
    	return this.element.offsetHeight;
    }

    set height(val) {
        this.element.style.height = val + "px";
    }


    //DOM operations
    addChild(child) {
      	this.children.push(child);
        this.element.appendChild(child.element);
    }

    show() {
        document.body.appendChild(this.element);
      	return this;
    }
  
  	hide() {
     	this.element.parentElement.removeChild(this.element); 
    }
  
  	addEventListner(name, callback){
     	this.element.addEventListner(name, callback); 
    }
  
    setAttribute(name, value){
		 this.element.setAttribute(name, value);
    }
  
  	set onClick(callback){
    	this.element.addEventListener("click", function() {
    		callback();
		}, false);
    }
}
