class NavBar extends Div {
    constructor(brand){
		super(null, "navbar navbar-default navbar-fixed-top");
      	this.content = new Div(null, "container");
      	this.addChild(this.content);
      	
      	this.header = new Div(null, "navbar-header");
      	this.content.addChild(this.header);
      
      	this.brand = new Div(null, "navbar-brand", "#");
      	this.brand.text = brand;
      	this.header.addChild(this.brand);
      	
      	this.show();
    }
}