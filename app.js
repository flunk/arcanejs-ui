class App {
	constructor(){
      	let navBar = new NavBar("JSReloaded");
      	let jumbo = new Div("jumbotron");
      	let heading = new H1("The matrix has you neo...");
      	let content = new Paragraph("This is your last chance. After this there is no turning back. You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland and I show you how deep the rabbit hole goes.");
		
      	jumbo.addChild(heading);
      	jumbo.addChild(content);
      	jumbo.show();
    }
};