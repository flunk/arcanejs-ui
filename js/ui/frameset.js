class FrameSet extends Div {
	constructor( isHorizontal ){
    	super("frameset");
      	 
      	this.frames = new Array();
      	this.handles = new Array();
      	this.horizontal = isHorizontal;
    }
  
  	addFrame( frame ){
      	if( this.frames.length > 0 ){
          	let firstFrame = this.frames[ this.frames.length - 1 ];
        	let handle = new FrameHandle( this, [ firstFrame , frame ]);
          	this.handles.push( handle );
          	handle.makeEven();
        }
      
      	this.frames.push( frame );
		this.addChild( frame );
      	this.trim();
    }
  
  	get totalHeight (){
    	let total = 0;
      	let i = 0;
      	while( i < this.frames.length ){
        	total += this.frames[i].height;
          	i++; 
        }
      	
      	i = 0;
      	while( i < this.handles.length ){
        	total += this.handles[i].height;
          	i++; 
        }
      	
      	return total;
    }
  
	get totalWidth (){
    	let total = 0;
      	let i = 0;
      	while( i < this.frames.length ){
        	total += this.frames[i].width;
          	i++; 
        }
      	
      	i = 0;
      	while( i < this.handles.length ){
        	total += this.handles[i].width;
          	i++; 
        }
      	
      	return total;
    }
  
  	trim(){
      	if( this.horizontal ){
    		let deltaHeight = this.totalHeight - this.parent.height - 1;
      		this.frames[ this.frames.length - 1 ].height = this.frames[ this.frames.length - 1 ].height - deltaHeight;
          	this.frames[ this.frames.length - 1 ].resize();
        } else {
    		let deltaWidth = this.totalWidth - this.parent.width;
      		this.frames[ this.frames.length - 1 ].width = this.frames[ this.frames.length - 1 ].width - deltaWidth;
          	this.frames[ this.frames.length - 1 ].resize();
        }
    }
  
  	resize(){
      	if( this.horizontal ){
    		let deltaHeight = (this.totalHeight - this.parent.height - 1);
          	let i = 0;
          	while ( i < this.frames.length ){
            	this.frames[ i ].height = this.frames[ i ].height - (deltaHeight / ( this.totalHeight / this.frames[ i ].height )); 
          		this.frames[ i ].resize();
              	i++; 
            }
        } else {
    		let deltaWidth = this.totalWidth - this.parent.width;
          	let i = 0;
          	while ( i < this.frames.length ){
            	this.frames[ i ].width = this.frames[ i ].width - (deltaWidth / ( this.totalWidth / this.frames[ i ].width )); 
          		this.frames[ i ].resize();
              	i++; 
            }
        }
    }
} 