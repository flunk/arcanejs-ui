class BaseApp{
  	constructor(icon){
        this.view = new View( );
      	this.item = new NavBarItem( new Glyphicon(icon), app.navBarApp.navBar, this.view, this);
      	this.initialised = false;
    }
  
  	init(){
      	console.log("bb");
    	this.initialised = true;
    }
  
  	activate(){
		if(!this.initialised){
        	this.init();
        }
    }
}