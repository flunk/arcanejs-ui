class PanelHandle extends ListItem {
	constructor( title, panel, stack ){
    	super("list-group-item unselectable");
      	this.title = title;
		this.panel = panel;
      	this.isDown = false;
      	this.isMoving = false;
      	
		this.click = (e) => this.handleClick(e);
      	this.stack = stack;
      	this.open = false;
      	this.element.addEventListener("click", this.click );
   		
      	this.tag = new Element("span", "badge").addChild(new Glyphicon("menu-right"));
      
      	this.setText(title);
      	this.addChild(this.tag);
      	
     	return this;
    }
  
  	handleClick(e){
    	if(this.open){
        	this.panel.hide();
          	this.tag.clear();
          	this.tag.addChild(new Glyphicon("menu-right"));
          	this.open = false;
        } else {
        	this.stack.addChildAfter( this.panel, this );
          	this.tag.clear();
          	this.tag.addChild(new Glyphicon("menu-down"));
          	this.open = true;
        }
    }
}