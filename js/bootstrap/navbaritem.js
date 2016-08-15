class NavBarItem extends ListItem{
	constructor( caption , navBar){
		super( "unselectable" );
      	this.navBar = navBar;
      	this.link = new Link( null );
      	this.link.setText( caption );
      
      	this.addChild( this.link );
      
      	this.dropdown = null;
      	this.view = null;

      	this.onClick = () => this.handleClick();
      	
      	navBar.addItem ( this );
    }
	
  	handleClick(){
      	if( this.dropdown != null ){
          	this.dropdown.x = this.x;
          	this.dropdown.y = this.y + this.height;
        	this.dropdown.show();
        } else if( this.view != null ) {
          	this.navBar.setActive ( this );
        }
    }
  
  	deactivate(){
		this.removeCssClass( "active" );
        this.hide();
    }
  
  	activate(){
    	this.addCssClass( "active" );
    }
}