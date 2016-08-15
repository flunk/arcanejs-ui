class View extends Div {
	constructor( element ){
    	super("view" );
      	
      	this.frameSet = null;
      	this.panel = null;
      
      	if( element.constructor.name == "Panel" ){
        	this.panel = element;
          	this.addChild ( element );
        } else if ( element.constructor.name == "FrameSet"  ){
          	this.frameSet = element;
          	this.frameSet.parent = this;
          	this.addChild ( element );
        }
    }
  
  	resize(){
    	if(this.frameSet){
        	this.frameSet.resize(); 
        }
    }
}