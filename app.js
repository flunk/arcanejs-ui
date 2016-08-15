var frameSet;

class App {
	constructor(){
      	this.navBarApp = new NavBarApp( "ElementJS" );	
      	this.navBar = this.navBarApp.navBar;
      	
		this.initDropdown();
		this.initPanel1();
		this.initPanel2();
    }

  	initDropdown(){
      	this.itemWithDropdown =  new NavBarItem( "Dropdown", this.navBar );
      	let dropdown = new Dropdown( );
      	
      	dropdown.addItem("Show Modal" , () => { 
        	this.showModal(); 
        });
      
      	dropdown.addItem("Log to console" , () => { 
        	console.log(this);
        });
      
      	dropdown.addItem("Split Container 2" , () => { 
        	this.split();
        });
      
      	this.itemWithDropdown.dropdown = dropdown;
      	this.navBar.addItem ( this.itemWithDropdown );
    }
  
	initPanel1(){
        let item = new NavBarItem( "Panel1", this.navBar );
      	let view = new View( new Panel() );
      	item.view = view;
      	
      	let jumbo = new Div("jumbotron");
      	let heading = new H1("The matrix has you neo...");
      	let content = new Paragraph("This is your last chance. After this there is no turning back. You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes.");
		
      	jumbo.addChild( heading );
      	jumbo.addChild( content );
      	view.panel.addChild( jumbo ); 
    }
  
	initPanel2(){
      	let panelItem2 = new NavBarItem( "Frames Demo", this.navBar );
      	frameSet = new FrameSet( true );
      	let view = new View( frameSet );
      	panelItem2.view = view;
      	this.view2 = view;
      
      	panelItem2.handleClick();
        let frame0 = new Frame( frameSet );
      	let frame1 = new Frame( frameSet );
		let frame2 = new Frame( frameSet );

      	let frameSetVertical = new FrameSet( false );
      	frame0.setContent( frameSetVertical );
      
      	let frame3 = new Frame( frameSetVertical );
		let frame4 = new Frame( frameSetVertical );
      	let frame5 = new Frame( frameSetVertical );
      
      	let frameSetVertical2 = new FrameSet( false );
      	frame1.setContent( frameSetVertical2 );

      	let frame6 = new Frame( frameSetVertical2 );
		let frame7 = new Frame( frameSetVertical2 );
      
      	let frameSetHorizontal2 = new FrameSet( true );
      	frame4.setContent( frameSetHorizontal2 );
      
      	let frame8 = new Frame( frameSetHorizontal2 );
		let frame9 = new Frame( frameSetHorizontal2 );
    }
  
  	showModal(){
 		this.modal = new Modal("Test Modal", true);
      	this.modal.body.addChild(new Paragraph("hallo"));
      	let button = new Button("close");
		
      	let modal = this.modal;
      	button.onClick = () =>{
        	modal.hide();
        };
      
      	this.modal.footer.addChild(button);   	 
    }
  
  	split(){
    	this.container2.splitHorizontal( new Container( new Panel ) ); 
    }
};