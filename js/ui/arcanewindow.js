class ArcaneWindow extends Element {
	constructor(blueprint){
    	super({
            cssClass:"unselectable shadow",
            style:{
                display:"flex",
                "flex-direction":"column",
                left:(window.innerWidth/2)-(app.theme.modalWidth/2) +'px',
                position:"absolute",
                top:"100px",
                height:app.theme.modalHeight+"px",
                width:app.theme.modalWidth+"px",
                background:app.theme.bgdefault,
                "border-color": app.theme.border,
                "border-width": "1px",
                "border-style": "solid",
                transition:"top 500ms cubic-bezier(0,.8,.21,1), opacity 500ms cubic-bezier(0,.8,.21,1)",
            },
            titleBar:{
                style:{
                    display:"flex",
                    "flex-direction":"row"
                },
                titlebar:{
                    style:{
                        "flex-grow":1,
                        "font-size": "16px",
                        "margin-left": "10px",
                        "margin-top": "2px",
                        "font-weight": "bold"
                    },
                    text:"Modal"
                },
                closeButton:{
                    innerHTML:"&times;",
                    cssClass:"hoverPrimary",
                    style:{
                        flex:"none",
                        width:"25px",
                        height:"25px",
                        "font-size":"27px",
                        "text-align":"center",
                        "line-height": 0.9
                    }
                }
            },
            mainPanel:{
                text:"mainpanel",
                style:{
                    "flex-grow":1,
                    "margin": "10px"
                }
            },
            footer:{
                style:{
                    "flex":"none",
                    "margin": "10px"
                },        
                button:{
                    type:Button,
                    text:"Next"
                }
            }
        });
        
        this.construct(blueprint);
	}
}