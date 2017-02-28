class DropdownMenu extends Div {
  	constructor(title, cssClass){
  	    if(cssClass !== null){
  	        super("dropdown unselectable " + cssClass);
  	    } else {
  	        super("dropdown unselectable");
  	    }
		
		this.button = new Button("", "btn btn-primary");
		
		this.buttonTitle = new Span().setText(title);
		this.span = new Span("caret");
		
		this.button.addChild(this.buttonTitle);
		this.button.addChild(this.span);
		
		this.dropdown = new List("dropdown-menu");
		this.addChild(this.button);
		//this.addChild(this.dropdown);
    }
    
    addItem( caption, callback ){
    	let item = new DropdownItem(this.dropdown, caption, callback );
        this.dropdown.addChild(item);
    }
}