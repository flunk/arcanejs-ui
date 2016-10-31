class Input extends Element {
    constructor( placeholder, hideInput, className ){
  		super("Input", className);
      	if( placeholder ){
        	this.setAttribute("placeholder", placeholder);
        }
      
      	if( hideInput ){
        	 this.setAttribute("type" , "password" ); 
        }
      
      	//this.value = this.element.value;
      	
      	return this;
	}
  
  	get value(){
    	return this.element.value; 
    }
  
  	set value(val){
   		this.element.value =  val;
    }
}