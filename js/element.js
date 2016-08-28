class Element {
    constructor(type, className ,id){
		this.element = document.createElement(type);
  
        if(id != null){
            this.element.id = id;
        }

        if (className != null) {
            this.element.className = className;
        }
      
      	this.children = new Array();
      
    	return this;
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
      	return this;
    }
  
  
  	get clientX() {
    	return this.element.getBoundingClientRect().left;
    }

	get clientY() {
    	return this.element.getBoundingClientRect().top;
    }

    get width() {
      	this.element.style.setProperty('display', '');
        return this.element.getBoundingClientRect().width;
    }
  
  	addCssClass( cssClass ){
    	this.element.classList.add(	cssClass );
      	return this;
    }
  
  	removeCssClass( cssClass ){
    	this.element.classList.remove( cssClass );
      	return this;
    }


    set width(val) {
        this.element.style.width = val + "px";
       	return this;
    }

    get height() {
      	this.element.style.setProperty('display', '');
    	return this.element.getBoundingClientRect().height;
    }

    set height(val) {
        this.element.style.height = val + "px";
       	return this;
    }


    //DOM operations
    addChild(child) {
      	this.children.push(child);
        this.element.appendChild(child.element);
       	return this;
    }
  
  	addChildBefore( child , beforeChild ){
    	let index = this.children.indexOf(beforeChild);
      	this.children.splice(index, 0, child);
      	this.element.insertBefore( child.element , beforeChild.element);
      	return this;
    }
  
  	addChildAfter( child , afterChild ){
    	let index = this.children.indexOf(afterChild);
      	this.children.splice(index + 1, 0, child);
      	this.element.insertBefore( child.element , afterChild.element.nextSibling);
      	return this;
    }
  
  	removeChild(child){
      	child.hide();
    	this.children.splice( this.children.indexOf(child), 1);
      	return this;
    }

    show() {
        document.body.appendChild(this.element);
      	return this;
    }
  
  	hide() {
      	if( this.element.parentElement ){
     		this.element.parentElement.removeChild(this.element);
        }
      	return this;
    }
  
  	addEventListner(name, callback){
     	this.element.addEventListner(name, callback);
       	return this;
    }
  
    setAttribute(name, value){
		this.element.setAttribute(name, value);
       	return this;
    }
  
  	set onClick(callback){
    	this.element.addEventListener("click", function() {
    		callback();
		}, false);
      	return this;
    }
  
  	isPointInBounds(x, y){
    	 return( ( x > this.clientX && x < ( this.clientX + this.width ) ) && ( y > this.clientY && y < ( this.clientY + this.height ) ) );
    }
}
