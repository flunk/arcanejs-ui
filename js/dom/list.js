class List extends Element{
	constructor(cssClass){
    	super( "ul", cssClass );
      	this.items = new Array();
    }
  
  	addItem( item ){
    	this.items.push( item );
      	this.addChild( item );
    }
}