class NavBar extends Div {
    constructor(brand){
		super("navbar navbar-default navbar-fixed-top");
      	this.content = new Div("container-fluid");
      	this.addChild(this.content);
      	
      	this.header = new Div("navbar-header");
      	this.content.addChild(this.header);
      
      	this.brand = new Div("navbar-brand", "#");
      	this.brand.setText(brand);
      	this.header.addChild(this.brand);
      
      	this.collapsable = new Div( "collapse navbar-collapse", "bs-example-navbar-collapse-1" );
      	this.content.addChild( this.collapsable );
      
      	this.menuItems = new List( "nav navbar-nav", "bs-example-navbar-collapse-1" );	
      	this.collapsable.addChild( this.menuItems );
            
      	this.panel = new Panel();
      	this.addChild( this.panel );
      	
      	this.activeItem = null;
      
      	this.resize();
      	this.show();
    }
  
  	resize(){
        this.panel.x = this.height;
      	this.panel.height = window.innerHeight - this.height;
    }
  
  	addItem( item ){
		 this.menuItems.addItem( item );
    }
  
  	setActive( item ){
      	if( this.activeItem != null ){
    		this.activeItem.removeCssClass( "active" );
          	this.activeItem.panel.hide();
        }
      	this.activeItem = item;
      	this.activeItem.addCssClass( "active" );
      	this.panel.addChild( item.panel );
    }
}
