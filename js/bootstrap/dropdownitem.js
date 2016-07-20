class DropdownItem extends ListItem {
	constructor(dropdown, label, callback){
     	super();
      	this.dropdown = dropdown;
      	this.callback = callback;
      
  		this.link = new Link();
      	this.link.setText(label);
      	this.link.onClick = () => this.handleClick();

  		this.addChild(this.link);
    }
  
  	handleClick(){
      	this.dropdown.hide();
    	this.callback();
    }
}