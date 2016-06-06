class NavBar extends Div {
    constructor(brand){
		super("navbar navbar-default navbar-fixed-top");
      	this.content = new Div("container");
      	this.addChild(this.content);
      	
      	this.header = new Div("navbar-header");
      	this.content.addChild(this.header);
      
      	this.brand = new Div("navbar-brand", "#");
      	this.brand.setText(brand);
      	this.header.addChild(this.brand);
      	
      	this.show();
    }
}
