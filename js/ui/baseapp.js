class BaseApp{
  	constructor(icon){
      	this.init(icon);
    }
  
  	init(icon){
        this.view = new View( );
      	this.item = new NavBarItem( new Glyphicon(icon), app.navBarApp.navBar, this.view );
    }
}