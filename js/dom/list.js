class List extends Element{
	constructor(cssClass){
    	super( "ul", cssClass );
      	this.items = new Array();
    }

  	addItem( item ){
    	this.items.push( item );
      	this.addChild( item );
    }

	addItemSorted( item, property ){
		let before = null;

		for(let compare of this.items) {
			if ( before ) continue;
			if ( item[property].localeCompare(compare[property]) === -1 ) {
				before = compare;
			}
		}

		if (before) {
			this.items.splice( this.items.indexOf(before), 0, item );
			this.addChildBefore( item, before );
		} else {
			this.addItem( item );
		}
	}
}
