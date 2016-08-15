class Container extends Div {
	constructor( panel ){
    	super("ejcontainer");
      
      	if( panel ){
        	this.panel = panel;
          	this.addChild ( panel );
        }
      
      	this.childContainers = new Array();
    }
  
  	splitHorizontal( container ){
    	let tempContainer = new Container( this.panel );
      	if( this.panel ){
        	this.panel.hide();
          	this.panel = null;
        }
      	
      	this.childContainers.push( tempContainer );
      	this.childContainers.push( container );
      	
      	this.addChild ( tempContainer );
      	this.addChild ( container );
    }
}