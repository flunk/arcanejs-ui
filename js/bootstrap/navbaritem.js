class NavBarItem extends ListItem{
	constructor( caption , navBar){
		super( "unselectable" );
      	this.navBar = navBar;
      	this.link = new Link( null );
      	this.link.setText( caption );
      
      	this.addChild( this.link );
      
      	this.dropdown = null;
      	this.panel = null;

      	this.onClick = () => this.handleClick();
    }
	
  	handleClick(){
      	if( this.dropdown != null ){
          	this.dropdown.x = this.x;
          	this.dropdown.y = this.y + this.height;
        	this.dropdown.show();
        } else if( this.panel != null ) {
        	//TODO Make panels appear when clicked
          	this.navBar.setActive ( this );
          	//this.navBar.panel.addChild( this.panel );
        }
    }
}