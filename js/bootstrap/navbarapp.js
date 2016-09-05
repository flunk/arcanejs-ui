class NavBarApp extends Div {
    constructor(brand, horizontal){
      	if(horizontal){
			super( "navBarApp" );
          	this.navBarTop = new Div( "navBarTop" );
        } else {
        	super( "navBarAppVertical" );
          	this.navBarTop = new Div( "navBarLeft" );
        }
		this.show();
		
      	this.container = new Div( "navBarContainer" );
      	this.addChild( this.navBarTop );
      	this.addChild( this.container );

		this.navBar = new NavBar( "ElementJS", this.navBarTop, this.container );
    }
}