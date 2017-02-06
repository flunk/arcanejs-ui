class Dropdown extends List {
  	constructor(x,y){
		super("dropdown-menu unselectable");
        this.element.style.display = 'block';
      	this.x = x;
      	this.y = y;
      	
      	this.addItem = function( caption, callback ){
        	let item = new DropdownItem(this, caption, callback );
            this.addChild(item);
    	}
        
        this.element.onmouseleave= () => {
    		this.hide();
    	};
    }
}