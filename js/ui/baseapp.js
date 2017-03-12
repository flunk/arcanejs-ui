class BaseApp{
  	constructor(icon, title){
        this.view = new View();
      	this.item = new NavBarItem( new Glyphicon(icon), title, app.navBarApp.navBar, this.view, this);
      	this.initialised = false;
      	this.isActive = false;
    }
  
  	init(){
    	this.initialised = true;
    }
  
  	activate(){
		if(!this.initialised){
        	this.init();
        }
        this.isActive = true;
    }
    
    deactivate(){
        this.isActive = false;
    }
}