class PanelStack extends List {
	constructor( view, tab ){
    	super("list-group");
      	return this;
    }
  
  	addHandle( handle ){
    	this.addChild(handle);
      	handle.handleClick();
    }
}