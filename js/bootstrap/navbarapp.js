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
          	this.hidden = false;
        }
        
		this.show();
      	this.container = new Div( "navBarContainer" );
      	this.addChild( this.navBarLeft );
      	this.addChild( this.container );
      	this.navBarLeft.addChild(this.chevron);

		this.navBar = new NavBar( "ElementJS", this.navBarLeft, this.container );
		this.toggle();
		
		document.addEventListener("keydown", (e) => {
            if (e.keyCode == 219 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                e.preventDefault();
                e.stopPropagation();
                this.toggleHidden();
            }
        
          	return false;
      	});
    }
    
    toggle(){
        //console.log(this);
        
        if(this.toggled){
            this.chevron.clear();
            this.chevron.addChild(new Span( "glyphicon glyphicon-chevron-right" ));
            this.navBar.toggleLables(false);
            this.navBarLeft.width = 45;
            this.toggled = false;
            this.navBar.handleResize();
            
            
            setTimeout(() => {this.navBar.handleResize()}, 1);
        } else {
            this.chevron.clear();
            this.chevron.addChild(new Span( "glyphicon glyphicon-chevron-left" ));
            
            this.navBarLeft.width = 200;
            this.navBar.toggleLables(true);
            this.toggled = true;
            this.navBar.handleResize();
            setTimeout(() => {this.navBar.handleResize()}, 1);
        }
    }
    
    toggleHidden(){
        if(!this.hidden){
            this.navBarLeft.width = 0;
            this.navBar.handleResize();
            this.navBarLeft.hide();
            this.container.setStyle({"width":"100%"});
            this.hidden = true;
        } else {
            this.addChildBefore( this.navBarLeft, this.container );
            this.toggled = !this.toggled;
            this.navBarLeft.width = 45;
            this.toggle();
            this.hidden = false;
        }
    }
}