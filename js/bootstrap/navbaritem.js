class NavBarItem extends ListItem{
	constructor( icon, caption , navBar, view, baseapp){
		super( "unselectable" );
      	this.navBar = navBar;
      	this.link = new Link( null );
      	this.app = baseapp;

      	//if( caption instanceof Glyphicon ){
      	this.caption = caption;
        this.link.addChild( icon );
       	this.addChild( this.link );
       	
       	
        this.label = null; 
        this.toggle(true);
        

      
      	this.dropdown = null;
      	this.view = view;

      	this.onClick = () => this.handleClick();
      	
      	navBar.addItem ( this );
    }
	
  	handleClick(){
      	if( this.dropdown !== null ){
          	this.dropdown.x = this.x;
          	this.dropdown.y = this.y + this.height;
        	this.dropdown.show();
        } else if( this.view !== null ) {
          	this.navBar.setActive ( this );
        }
      
      	if(this.app !== null){
        	if(this.app.activate !== null){
            	this.app.activate(); 
            }
        }
    }
  
  	deactivate(){
		this.removeCssClass( "active" );
        this.hide();
        
        if(this.app !== null){
        	if(this.app.deactivate !== null){
            	this.app.deactivate(); 
            }
        }
    }
  
  	activate(){
    	this.addCssClass( "active" );
    }
    
    toggle(showLabel){
        if(showLabel){
            if(this.label === null){
                 this.label = new Div("NavItemLabel").setText(this.caption);
                 this.link.addChild(this.label);
            }
        } else {
            if(this.label !== null){
                this.link.removeChild(this.label);
                this.label = null;
            }          
        }
    }
}