class Button extends Element {
    constructor(blueprint, className, id){
        if(typeof blueprint === "object"){ //New style
            blueprint.domtype = "button";
            if (blueprint.cssClass == null) {
                blueprint.cssClass = "btn btn-primary";
            }
            super(blueprint);
        } else { //Old style
            if (className != null) {
                super("button", className, id);
            } else {
                super("button", "btn btn-primary");
            }
    
            if (blueprint == "&times;") {//innerHTML is a security risk, this is the only exception
                this.element.innerHTML = blueprint;
            } else {
                this.element.innerText = blueprint;
            }
        }
    }
}