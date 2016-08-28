class View extends Div {
	constructor( element ){
    	super("view");
      
      	this.frameSet = null;
      	this.panel = null;
      	this.frames = new Array();
 
        if( element ){
        	this.setContent( element ); 
        }

      	return this;
    }
  
  	setContent( element ){
        if( element.constructor.name == "Panel" ){
        	this.panel = element;
          	this.addChild ( element );
        } else if ( element.constructor.name == "FrameSet"  ){
          	this.frameSet = element;
          	this.frameSet.parent = this;
          	this.frameSet.view = this;
          	this.addChild ( element );
        }
      	
      	return this;
    }
  
  	resize(){
    	if(this.frameSet){
        	this.frameSet.resize(); 
        }
      	return this;
    }
  
  	getFrameAtPosition(x , y){
    	let result = null;
      	this.frames.forEach( function(frame) {
        	if(frame.content != null){
          		if(frame.content.constructor.name != "FrameSet" && frame.isPointInBounds(x, y)){
                	result = frame;
                }
        	} else {
            	if(frame.isPointInBounds(x, y)){
                 	result = frame;
                }
            }
        });
      	return result;
    }
}