class FrameHandle extends Div {
	constructor( frameSet, frames ){
    	super("frameHandle");
      	this.frameSet = frameSet;
      	this.frames = frames;
      	this.frameSet.addChild ( this );
    	
      	if( frameSet.horizontal ){
        	this.makeHorizontal();
        } else {
        	this.makeVertical();
        }
      	
      	frameSet.addChild( this );
      	
      	this.mouseDown = (e) => this.handleMouseDown(e);
      	this.mouseUp = (e) => this.handleMouseUp(e);
      	this.mouseMove = (e) => this.handleMouseMove(e);
      
      	this.element.addEventListener("mousedown", this.mouseDown );
    }
  
  	makeEven(){
      	if ( this.frameSet.horizontal ){
            let totalHeight = (this.frames[0].height + this.frames[1].height) + 2;
            let half = ( totalHeight ) / 2;
            this.frames[0].height = half;
            this.frames[1].height = half;
        } else {
            let totalWidth = (this.frames[0].width + this.frames[1].width) + 2;
            let half = ( totalWidth ) / 2;
            this.frames[0].width = half;
            this.frames[1].width = half;       	 
        }
      
      	this.frames[0].resize();
      	this.frames[1].resize();
    }
  
  	makeHorizontal(){
		this.addCssClass( "frameHandleHorizontal" );

    }
  
  	makeVertical(){
     	this.addCssClass( "frameHandleVertical" ); 	
    }
  
  	handleMouseUp (){
      	document.body.removeEventListener("mouseup", this.mouseUp );
      	document.removeEventListener("mousemove", this.mouseMove );
    };

	handleMouseMove (e){
      	e.preventDefault();
      	if ( this.frameSet.horizontal ){
            let top = this.frames[0].clientY;
            let bottom = this.frames[1].clientY + this.frames[1].height;
            let totalHeight = (this.frames[0].height + this.frames[1].height) + this.height;

            let frameTop = this.frames[0].clientY;
            if( e.clientY > top + this.frames[0].minHeight && e.clientY < bottom - this.frames[0].minHeight - 2){

                this.frames[0].height = (e.clientY - this.frames[0].clientY) ;
                this.frames[1].height = (totalHeight - this.frames[0].height) - this.height;
            }
        } else {
            let left = this.frames[0].clientX;
          	
            let right = this.frames[1].clientX + this.frames[1].width;
            let totalWidth = (this.frames[0].width + this.frames[1].width) + this.width;

            let frameLeft = this.frames[0].clientX;
            if( e.clientX > left + this.frames[0].minWidth && e.clientX < right - this.frames[0].minWidth - 2){
				
                this.frames[0].width = (e.clientX - this.frames[0].clientX) ;
                this.frames[1].width = (totalWidth - this.frames[0].width) - this.width;
            }          
        }
      	this.frames[0].resize();
      	this.frames[1].resize();
      	return false;
    }
    
	handleMouseDown (e){
    	e.preventDefault();
      	document.body.addEventListener("mouseup", this.mouseUp );
      	document.addEventListener("mousemove", this.mouseMove );
        return false;
    };
}