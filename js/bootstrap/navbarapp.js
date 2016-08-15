class NavBarApp extends Div {
    constructor(brand){
		super( "navBarApp" );
		this.show();
		this.navBarTop = new Div( "navBarTop" );
      	this.container = new Div( "navBarContainer" );
      	this.addChild( this.navBarTop );
      	this.addChild( this.container );

      	
		this.navBar = new NavBar( "ElementJS", this.navBarTop, this.container );
      	

      	
      	

    }
}