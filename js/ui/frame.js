class Frame extends Div {
	constructor( frameSet, size ){
    	super("frame");
      	this.frameSet = frameSet;
      	this.minHeight = 50;
      	this.minWidth = 50;
      	this.size = size;
      	this.content = null;
      	this.view = this.frameSet.view;
      	this.view.frames.push( this );	
      	if( !this.frameSet.horizontal ){
        	this.addCssClass( "frameVertical" ); 
        }
    }
  
  	resize(){
      	if ( this.content ){
          	if( this.content.resize ){
            	this.content.resize();
            }
        } else {
        	//this.setText( this.width + " x " + this.height );
        }
    }
  
  	setContent( content ){
      	content.frame = this;
      	this.clear();
    	this.content = content;
      	this.content.parent = this;
      	this.addChild( content );
      	
    }
  
  	close(){
    	this.frameSet.removeFrame( this ); 
    }
}