class Frame extends Div {
	constructor( frameSet ){
    	super("frame");
      	this.frameSet = frameSet;
      	this.minHeight = 50;
      	this.minWidth = 50;
      	this.content = null; 
      	
      	if( !this.frameSet.horizontal ){
        	this.addCssClass( "frameVertical" ); 
        }
      
      	this.frameSet.addFrame ( this );
    }
  
  	resize(){
      	if ( this.content ){
        	this.content.resize();
        } else {
        	this.setText( this.width + " x " + this.height );
        }
    }
  
  	setContent( content ){
      	this.clear();
    	this.content = content;
      	this.content.parent = this;
      	this.addChild( content );
    }
}