class PanelTab extends Div {
	constructor( title, panel, tabGroup ){
    	super("panelTab unselectable");
      	this.title = title;
		this.panel = panel;
      	this.tabGroup = tabGroup
       	this.dragOffsetX = 0;
      	this.dragOffsetY = 0;
      	this.startDragX = 0;
      	this.startDragY = 0;
      	this.isDown = false;
      	this.isMoving = false;
      	this.dragContainer = new Div("absolute"); 
      
      	this.link = new Div();
      	this.setText(title + " ");
      
      	let closeButton = new Div("inline-block hand");
      	
      	closeButton.element.innerHTML = "&#215;";
      
      	this.addChild( closeButton );
      	
		this.down = (e) => this.handleMouseDown(e);
		this.up = (e) => this.handleMouseUp(e);
      	this.close = (e) => this.handleClose(e);
      	this.move = (e) => this.handleMove(e);
      	
      	this.element.addEventListener("mousedown", this.down );
      	this.element.addEventListener("mouseup", this.up );    
		closeButton.element.addEventListener("click", this.close );
      
     	return this;
    }
  
  	handleMouseUp(e){
      	if ( e ){
        	e.preventDefault();
          	e.stopPropagation();
        }
      	
      	let frameOver = this.tabGroup.view.getFrameAtPosition( e.clientX, e.clientY );
      
   		if(this.isDown){
          	if(this.isMoving){
              	if( frameOver ){
                  	if(frameOver.content){
                      	if(frameOver.content.constructor.name == "TabGroup"){
                          	if(frameOver.content.tabBar.isPointInBounds( e.clientX, e.clientY )){
						  		this.tabGroup = frameOver.content;
                              	let tabOver = null;
                              	let otherTabs = this.tabGroup.tabBar.children;
                              
                             	let i = 0;
                              	while ( i < otherTabs.length ){
                                  	if(otherTabs[i].isPointInBounds( e.clientX, e.clientY )){
                                    	tabOver = otherTabs[i];
                                      	i =  otherTabs.length;
                                    }
                                	i++; 
                                }
                              
                              	if( tabOver ){
                                	let localX = e.clientX - tabOver.x;
                                  	if( localX < tabOver.width / 2 ){
                                    	this.tabGroup.tabBar.addChildBefore( this, tabOver );
                                    } else {
                                      	this.tabGroup.tabBar.addChildAfter( this, tabOver );
                                    }
                                } else {
                                	this.tabGroup.tabBar.addChild(this);
                                }
                              
                              	this.activate();
                          	} else {
                              	frameOver.content.split( e.clientX, e.clientY, this)
                          	}
                      	}
                  	}
              	}            	
            } else {
                this.activate();
            }
          	
          	if( frameOver ){          	
            	this.isDown = false;
          		this.isMoving = false;
          		window.removeEventListener("mousemove", this.move ); 
            }
        }

      	return false;
    }
  
  	handleMouseDown(e){
      	if ( e ){
        	e.preventDefault();
           	e.stopPropagation();
        }
      
      	this.isDown = true;
      	this.startDragX = e.clientX;
      	this.startDragY = e.clientY;
      
		window.addEventListener("mousemove", this.move );
      	return false;
    }  	
  
  	handleClose(e){
      	if ( e ){
        	e.preventDefault();
          	e.stopPropagation();
        }      
      	this.tabGroup.closeTab( this );
      	
      	return false;
    }
  	
  	handleMove( e ){
      	if( !this.isMoving && this.isDown && (Math.abs(this.startDragX - e.clientX) > 20 || Math.abs(this.startDragY - e.clientY) > 20)){
          	this.deactivate();
            this.tabGroup.closeTab( this );
          	this.isMoving = true;
            this.dragContainer.addChild( this );
          	this.dragContainer.show();
        }
      	
      	this.dragContainer.x = e.clientX - 10;
      	this.dragContainer.y = e.clientY - 10;
    }
  
  	activate(){
   		this.tabGroup.setActive( this );
        this.addCssClass("active");     
    }
  
  	deactivate(){
      	this.removeCssClass("active");
    }  
}