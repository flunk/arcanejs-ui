class App {
	constructor(){
      	//Navbar stuff
      	this.navBar = new NavBar("ElementJS");
      	
      	//Dropdown
      	this.itemWithDropdown =  new NavBarItem( "Dropdown", this.navBar );
      	let dropdown = new Dropdown( );
      	
      	dropdown.addItem("hallo" , function(){ 
        	alert(1) } 
       	);
      
      	dropdown.addItem("piet" , function(){ 
        	alert(2) } 
       	);
      
      	this.itemWithDropdown.dropdown = dropdown;
      	this.navBar.addItem ( this.itemWithDropdown );
      	
      	//Panel1
      	this.panelItem1 = new NavBarItem( "Panel1", this.navBar );
      	this.navBar.addItem ( this.panelItem1 );
      	
      	this.panelItem1.panel = new Panel();
      	
      	this.jumbo = new Div("jumbotron");
      	this.heading = new H1("The matrix has you neo...");
      	this.content = new Paragraph("This is your last chance. After this there is no turning back. You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes.");
		
      	this.jumbo.addChild(this.heading);
      	this.jumbo.addChild(this.content);
      	this.panelItem1.panel.addChild( this.jumbo );
      
      
      	this.panelItem2 = new NavBarItem( "Panel1", this.navBar );
      	this.navBar.addItem ( this.panelItem2 );	
      	this.panelItem2.panel = new Panel();
      	this.panelItem2.panel.addChild( new H1("wololo") );
      	
      	//Jumbotron
      	/*


		this.modal = new Modal("Test Modal", true);
      	this.modal.body.addChild(new Paragraph("hallo"));
      	let button = new Button("close");
		
      	let modal = this.modal;
      	button.onClick = function(){
        	modal.hide();
        };
      
      	this.modal.footer.addChild(button);
*/
    }
};