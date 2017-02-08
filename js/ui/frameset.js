class FrameSet extends Div {
	constructor( isHorizontal, view, parent ){
    	super("frameset");
      	this.view = view;
      	this.parent = parent;
      	this.frames = new Array();
      	this.handles = new Array();
      	this.horizontal = isHorizontal;
      	this.parent.setContent(this);
    }
  
  	splitFrame( frameToSplit, frameToAdd, insertBefore ){
      	if(!this.horizontal){
            let half = (frameToSplit.width / 2) - 1; 
            frameToAdd.width = half; 
            frameToSplit.width = half;           
        } else {
            let half = (frameToSplit.height / 2) - 1; 
            frameToAdd.height = half; 
            frameToSplit.height = half;                    
        }

      	if(insertBefore){
			let toSplitIndex = this.frames.indexOf(frameToSplit);
            this.frames.splice(toSplitIndex, 0, frameToAdd);
            this.addChildBefore( frameToAdd, frameToSplit );
          	
          	if(toSplitIndex > 0){
            	let handleBefore = this.handles[toSplitIndex -1];
              	handleBefore.frames[1] = frameToAdd;
            }
          
            let handle = new FrameHandle( this, [ frameToAdd , frameToSplit ]);
            this.handles.splice(toSplitIndex, 0, handle);
          	handle.index = this.handles.length;
            this.addChildBefore( handle, frameToSplit);
        } else {
			let toSplitIndex = this.frames.indexOf(frameToSplit);  

            this.addChildAfter( frameToAdd, frameToSplit );
          	if(toSplitIndex < this.frames.length - 1){
            	let handleAfter = this.handles[toSplitIndex];
              	handleAfter.frames[0] = frameToAdd;
            }
          	
          	this.frames.splice(toSplitIndex + 1, 0, frameToAdd);
            let handle = new FrameHandle( this, [ frameToSplit, frameToAdd ]);
            this.handles.splice(toSplitIndex, 0, handle);
          	handle.index = this.handles.length;
            this.addChildAfter( handle, frameToSplit);
        }
    }
  	
  	addFrame( frame, size ){
      	if( this.frames.length > 0 ){
          	let firstFrame = this.frames[ this.frames.length - 1 ];
        	let handle = new FrameHandle( this, [ firstFrame , frame ]);
          	this.handles.push( handle );
          	handle.index = this.handles.length;
          	if (!size){
            	handle.splitPercentage( 0.5 ); 
            } else {
            	handle.splitPercentage( size ); 
            }
        }

      	frame.view = this.view;
      	frame.parent = this;
      	this.frames.push( frame );
      	
		this.addChild( frame );
      	this.trim();
    }
  
  	removeFrame( frame ){
    	this.removeChild( frame );
      	let frameIndex = this.frames.indexOf( frame );	
      	let handleBefore = this.handles[frameIndex -1];
      	let handleAfter = this.handles[frameIndex];
      
      	this.frames.splice(frameIndex , 1);
      	if(handleBefore){
          	if(this.frames[ frameIndex ]){
        		handleBefore.frames[1] = this.frames[ frameIndex ];
            } else {
            	handleBefore.hide();
              	this.handles.splice(this.handles.indexOf(handleBefore) , 1);
            }
        }
		
      	if(handleAfter){
        	handleAfter.hide();
          	this.handles.splice(frameIndex , 1);
        }
       	
        this.view.frames.splice( this.view.frames.indexOf( frame ), 1);
      
      	if(this.frames.length == 1 && this.handles.length == 1){
        	let handle = this.handles[0];
          	handle.hide();
          	this.handles = new Array();
        } else if(this.frames.length === 0){
          	this.destroy();
        } else {
        	this.resize();
      		this.trim();
        }
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
  
  	destroy(){
    	if(this.parent instanceof Frame){
        	this.parent.close();
        }
    }
} 