class NavBarApp extends Div {
    constructor(brand, horizontal){
      	if(horizontal){
			super( "navBarApp" );
          	this.navBar = new Div( "navBarTop" );
        } else {
        	super( "navBarAppVertical" );
          	this.navBarLeft = new Div( "navBarLeft" );
          	this.chevron = new Div( "navBarChevy" );
          	this.chevron.onClick = () => { this.toggle() };
          	this.toggled = false;
          	
        }
		this.show();
      	this.container = new Div( "navBarContainer" );
      	this.addChild( this.navBarLeft );
      	this.addChild( this.container );
      	this.navBarLeft.addChild(this.chevron);

		this.navBar = new NavBar( "ElementJS", this.navBarLeft, this.container );
		this.toggle();
    }
    
    toggle(){
        console.log(this);
        
        if(this.toggled){
            this.chevron.clear();
            this.chevron.addChild(new Span( "glyphicon glyphicon-chevron-right" ));
            
            this.navBarLeft.width = 45;
            this.toggled = false;
            this.navBar.handleResize();
            setTimeout(() => {this.navBar.handleResize()}, 1);
        } else {
                        this.chevron.clear();
            this.chevron.addChild(new Span( "glyphicon glyphicon-chevron-left" ));
            
            this.navBarLeft.width = 200;
            this.toggled = true;
            this.navBar.handleResize();
            setTimeout(() => {this.navBar.handleResize()}, 1);
        }
    }
}