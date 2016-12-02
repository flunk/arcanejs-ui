class BaseApp{
  	constructor(icon){
        this.view = new View( );
      	this.item = new NavBarItem( new Glyphicon(icon), app.navBarApp.navBar, this.view );
    }
}