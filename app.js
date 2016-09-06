var frameSet;

class App {
	constructor(){
      	this.navBarApp = new NavBarApp( "ElementJS" );	
      	this.navBar = this.navBarApp.navBar;
      	
		this.initDropdown();
		this.initPanel1();
		this.initFrames();
    }

  	initDropdown(){
      	this.itemWithDropdown =  new NavBarItem( new Glyphicon("fire"), this.navBar );
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
        let item = new NavBarItem( new Glyphicon("globe"), this.navBar );
      	let view = new View( new Panel() );
      	item.view = view;
      	
      	let jumbo = new Div("jumbotron");
      	let heading = new H1("The matrix has you neo...");
      	let content = new Paragraph("This is your last chance. After this there is no turning back. You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes.");
		
      	jumbo.addChild( heading );
      	jumbo.addChild( content );
      	view.panel.addChild( jumbo ); 
    }
  
	initFrames(){
      	let frameDemoView = new View( );
      	let frameDemoItem = new NavBarItem( new Glyphicon("edit"), this.navBar, frameDemoView );
      	
      	let frameSet = new FrameSet( true, frameDemoView,  frameDemoView);
      	
      	frameDemoItem.handleClick();
      	
        let mainFrame = new Frame( frameSet );
      	frameSet.addFrame( mainFrame, 0.5 );
      	let bottomFrame = new Frame( frameSet, 0.1 );
      	bottomFrame.setContent ( new TabGroup( frameDemoView ) );
      	frameSet.addFrame( bottomFrame, 0.3 );
      
      	let horizontalFrameSet = new FrameSet( false,  frameDemoView, mainFrame);
      
      	let middleFrame = new Frame( horizontalFrameSet );
      	horizontalFrameSet.addFrame(middleFrame);
      	let rightFrame = new Frame( horizontalFrameSet );
      	horizontalFrameSet.addFrame(rightFrame, 0.8);
      	
      	let stack = new PanelStack();
      	stack.addHandle( new PanelHandle("yolo", new Panel().addChild( new H3("panel1")), stack ));
      	stack.addHandle( new PanelHandle("yolo", new Panel().addChild( new H3("panel2")), stack ));
      	stack.addHandle( new PanelHandle("yolo", new Panel().addChild( new H3("panel3")), stack ));
      	let stackTab = new PanelTab("Stack", stack );
      	let tabGroup = new TabGroup( frameDemoView );
      	tabGroup.addTab( stackTab );
      	
      	middleFrame.setContent ( tabGroup );
      	rightFrame.setContent ( new TabGroup( frameDemoView ) );
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

app = new App();