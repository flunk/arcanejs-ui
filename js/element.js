/*
                ___                                   _______
               /   |  ______________ _____  ___      / / ___/
              / /| | / ___/ ___/ __ `/ __ \/ _ \__  / /\__ \ 
             / ___ |/ /  / /__/ /_/ / / / /  __/ /_/ /___/ / 
            /_/  |_/_/   \___/\__,_/_/ /_/\___/\____//____/  
            I reject your HTML and substitute it with JSON...

*/

// The Element class is the base for all ArcaneJS objects.
// It is a wrapper for the DOM element that adds functionality and shim functions
// to existing functionality of the elements.
class Element {
    constructor(blueprint, style ,id){
        //Initialise variables
      	this.children = new Array();
        //Retain backward compatability with code written before blueprints (like tabs...) 
        if(typeof blueprint === "string"){
            //Create the element of the type specified (the old way)
            this.element = document.createElement(blueprint);
        } else {
             //Create the element, defaults to Div
            if(blueprint.domtype !== undefined){
                this.element = document.createElement(blueprint.domtype);
            } else {
                this.element = document.createElement("div");
            }
            
            //Handle the rest of construction in the construct function
            this.construct(blueprint)
        }
        
		//Only used to be compatible with 3rd party libs that need an id...
        if(id != null){
            this.element.id = id;
        }

        if (style != null) {
            if(typeof style === 'string'){
                this.element.className = style;
            } else if(typeof style === 'object'){
                this.setStyle(style);
            }
        }
    	return this;
    }
    
    
    //Construct children which are added as members to this object and
    //handle other variables in the blueprint
    construct(blueprint){
        for (var key in blueprint) {
            if (blueprint.hasOwnProperty(key)) {
                if(key !== "domtype" && key !== "type" && key !== "options"){
                    let val = blueprint[key];
                    switch(key){
                        case "style": //Set the css class or parse a style definition
                            this.setStyle(val);
                            break;
                        case "cssClass": //Set the css class or parse a style definition
                            this.element.className = val;
                            break;                            
                        case "text": //Set the text
                            this.setText(val.toString());
                            break;
                        case "innerHTML": //Set the text
                            this.element.innerHTML = val;
                            break;                         
                        case "value": //Set the value
                            this.value = val;
                            break;
                        default: //Add a new member
                            //console.log(val);
                            if(this.isConstructor(val.type)){
                                this[key] = new val.type(val);
                            } else {
                                this[key] = new Element(val);
                            }
                            this.addChild(this[key]);
                            break;
                    }
                }
            }
        }  
    }


    get value() {
        return this.element.value; 
    }
    
    set value(val) {
        this.element.value =  val;
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
		this.children = [];
    }

    //Style operations
    setStyle(style){
        for (var key in style) {
            if (style.hasOwnProperty(key)) {
                this.element.style[key] = style[key];
            }
        }         
        return this;
    }

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
      
      	if(child.onload != null){
       		child.onload();  
        }
       	return this;
    }
  
  	addChildBefore( child , beforeChild ){
    	let index = this.children.indexOf(beforeChild);
      	this.children.splice(index, 0, child);
      	this.element.insertBefore( child.element , beforeChild.element);
      
      	if(child.onload != null){
       		child.onload();  
        }
      	return this;
    }
  
  	addChildAfter( child , afterChild ){
    	let index = this.children.indexOf(afterChild);
      	this.children.splice(index + 1, 0, child);
      	this.element.insertBefore( child.element , afterChild.element.nextSibling);
      
      	if(child.onload != null){
       		child.onload();  
        }
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
  
  	addEventListener(name, callback){
     	this.element.addEventListener(name, callback);
       	return this;
    }
  
    setAttribute(name, value){
		this.element.setAttribute(name, value);
       	return this;
    }



    set onChange(callback){
    	this.element.addEventListener("change", function(event) {
    		callback(event);
		}, false);
      	return this;
    }

  	set onClick(callback){
    	this.element.addEventListener("click", function(event) {
    		callback(event);
		}, false);
      	return this;
    }
    
  	isPointInBounds(x, y){
    	 return( ( x > this.clientX && x < ( this.clientX + this.width ) ) && ( y > this.clientY && y < ( this.clientY + this.height ) ) );
    }

    isConstructor(value){
        try {
            new new Proxy(value, {construct() { return {}; }});
            return true;
        } catch (err) {
            return false;
        }
    }
}
