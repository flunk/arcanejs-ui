class NavBar extends Div {
    constructor( brand, parent, container ){
		super("navbar navbar-vertical");
      	this.content = new Div();
      	this.addChild(this.content);
      	
      	//this.header = new Div("navbar-header");
      	//this.content.addChild(this.header);
      
      	//this.brand = new Div("navbar-brand", "#");
      	//this.brand.setText(brand);
      	//this.header.addChild(this.brand);
      
      	//this.collapsable = new Div( "collapse navbar-collapse", "bs-example-navbar-collapse-1" );
      	this.collapsable = new Div( );
      	this.content.addChild( this.collapsable );
      	
      	//nav navbar-nav
      	this.menuItems = new List( "nav nav-pills nav-stacked", "bs-example-navbar-collapse-1" );	
      	this.collapsable.addChild( this.menuItems );
       	
      	this.container = container;
      	
      	this.activeItem = null;
      
     	parent.addChild(this);
      	this.parent = parent;
	
      	window.addEventListener('resize', (e) => this.handleResize(e) );
    }
  
  	resize(){
        this.container.x = this.height;
      	this.container.height = window.innerHeight - this.height;
    }
  
  	handleResize(){
      	//this.resize();
    	let i = 0;

      	while (  i < this.menuItems.children.length ){     	
          	if( this.menuItems.children[i].view ){
            	this.menuItems.children[i].view.resize();
            }
        	i++;  
        }
    }
  
  	addItem( item ){
		 this.menuItems.addItem( item );
    }
  
  	setActive( item ){
      	if( this.activeItem != null ){
    		this.activeItem.removeCssClass( "active" );
          	this.activeItem.view.hide();
        }
      	this.activeItem = item;
      	this.activeItem.addCssClass( "active" );
      	this.container.addChild( item.view );
    }
}
