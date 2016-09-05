class TabGroup extends Div {
	constructor( view, tab ){
    	super("tabGroup");
      	this.view = view;
      	this.tabBar = new Div("arcane-tabs");
      	this.content = new Div("tabContent").setText("tabContent");
      	this.addChild( this.tabBar ).addChild( this.content );
      
      	if(!tab){
            this.tabBar.addChild( new PanelTab("Tab1", new Panel().addChild( new H3("panel1") ), this) );
            this.tabBar.addChild( new PanelTab("Tab2", new Panel().addChild( new H3("panel2") ), this) );
            this.tabBar.addChild( new PanelTab("Tab3", new Panel().addChild( new H3("panel3") ), this) );          
        } else {
         	this.tabBar.addChild( tab );
          	tab.tabGroup = this;
        }

      	this.tabBar.children[0].activate();
      	return this;
    }
  
  	addTab( tab ){
    	this.tabBar.addChild( tab );
      	tab.tabGroup = this;
      	tab.activate();
    }
  
  	setActive( tab ){
    	 if( this.activeTab ){
         	this.activeTab.deactivate();
         }
      
      	this.content.clear();
      	this.content.addChild( tab.panel );
      	this.activeTab = tab;
      
      	return this;
    }
  
  	closeTab( tab ){
      	this.tabBar.removeChild( tab );
    	if ( tab == this.activeTab ){
          	this.content.clear();
          	this.activeTab = null;
          	if( this.tabBar.children.length > 0 ){
              	this.tabBar.children[ this.tabBar.children.length -1 ].activate();
            } else {
            	this.frame.close();
            }
        }
      	return this;
    }

  	getSplitMode( x, y ){
    	let localX = x - this.content.x;
      	let localY = y - this.content.y;
      	
      	let result = null;
      
      	if(localY < this.content.height / 4){
        	result = "N";
        } else if(localY < this.content.height - ( this.content.height / 4) ){
          	if(localX < this.content.width /2){
            	result = "W";
            } else {
              	result = "E";
            }
        } else {
        	result = "S";
        }
      
      	return result;
    }
  
  	split( x, y, tab ){
    	let splitMode = this.getSplitMode(x, y);
      	let frameSet = this.parent.frameSet
        
        //TODO: Remove duplicate code
      	if( !frameSet.horizontal ){
            if( splitMode == "W" || splitMode == "E"){
              	let frame = new Frame( frameSet );
                let tabGroup = new TabGroup( this.view, tab );
                frame.setContent ( tabGroup );
                frameSet.splitFrame( this.parent, frame, splitMode == "W" );
            } else{
              	let newFrameSet = new FrameSet( true, this.view, this.parent);
              	let frame = new Frame( newFrameSet );
                let tabGroup = new TabGroup( this.view, tab );
                
             	newFrameSet.addFrame(frame);
              	let newFrame = new Frame( newFrameSet );
              	
              	if( splitMode == "N" ){
                    newFrame.setContent( this );
                    frame.setContent ( tabGroup );
                } else {
                    frame.setContent ( this );
                    newFrame.setContent( tabGroup );
                }
				newFrameSet.addFrame(newFrame);
            }
        } else {
            if( splitMode == "N" || splitMode == "S"){
              	let frame = new Frame( frameSet );
                let tabGroup = new TabGroup( this.view, tab );
                frame.setContent ( tabGroup );
                frameSet.splitFrame( this.parent, frame, splitMode == "N" );
            } else{
              	let newFrameSet = new FrameSet( false, this.view, this.parent);
              	let frame = new Frame( newFrameSet );
                let tabGroup = new TabGroup( this.view, tab );
                
             	newFrameSet.addFrame(frame);
              	let newFrame = new Frame( newFrameSet );
              	
              	if( splitMode == "W" ){
                    newFrame.setContent( this );
                    frame.setContent ( tabGroup );
                } else {
                    frame.setContent ( this );
                    newFrame.setContent( tabGroup );
                }
				newFrameSet.addFrame(newFrame);
            }          
        }
    }
}