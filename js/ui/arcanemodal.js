class ArcaneModal extends Element {
	constructor(blueprint){
    	super({
            background:{
                style:{
                    width:"100%",
                    height:"100%",
                    position:"absolute",
                    top:"0px",
                    left:"0px",
                    background:"rgba(0,0,0,0.7)",
                    opacity:0,
                    transition:"opacity 500ms cubic-bezier(0,.8,.21,1)"
                }
            },
            modalWindow:{
                type:ArcaneWindow,
                style:{
                    top:"-200px",
                }
            }
    	});
    	
    	this.construct(blueprint);
    	
    	const modalWidth = 300;
        this.show();
    
        setTimeout( () => { 
            this.background.element.style.opacity = 1;
            this.modalWindow.element.style.opacity = 1;
            this.modalWindow.y = 100;
        }, 1 );

    	this.background.onClick = () => {
    	    this.background.element.style.opacity = 0;
    	    this.modalWindow.element.style.opacity = 0;
    	    this.modalWindow.y = -300;

    	    setTimeout( () => {this.hide()}, 500 )
    	};
    	
      	return this;
    }
}
