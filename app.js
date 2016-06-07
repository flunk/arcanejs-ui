class App {
	constructor(){
      	//Navbar stuff
      	this.navBar = new NavBar("JSReloaded");
      	
      	//Jumbotron
      	this.jumbo = new Div("jumbotron");
      	this.heading = new H1("The matrix has you neo...");
      	this.content = new Paragraph("This is your last chance. After this there is no turning back. You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes.");
		
      	this.jumbo.addChild(this.heading);
      	this.jumbo.addChild(this.content);
      	this.jumbo.show();
      
		this.modal = new Modal("Test Modal", true);
      	this.modal.body.addChild(new Paragraph("hallo"));
      	let button = new Button("close");
		
      	let modal = this.modal;
      	button.onClick = function(){
        	modal.hide();
        };
      
      	this.modal.footer.addChild(button);
    }
};