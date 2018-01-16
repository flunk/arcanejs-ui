class Input extends Element {
    constructor(blueprint, hideInput, className, inputType ) {
        if(typeof blueprint === "object") { //New style
            blueprint.domtype = "input";
            super(blueprint);
            if (blueprint.hasOwnProperty('options')) {
                if (blueprint.options.type) {
                    this.setAttribute("type", blueprint.options.type);
                }
            }
        } else { //Old style
            super("Input", className);
            if( blueprint ) {
                this.setAttribute("placeholder", blueprint);
            }
            
            if( hideInput ) {
                this.setAttribute("type" , "password" ); 
            }
            
            if(inputType !== undefined) {
                this.setAttribute("type", inputType)
            }
            
            //this.value = this.element.value;
        }
        return this;
    }
    
    get value() {
        return this.element.value; 
    }
    
    set value(val) {
        this.element.value =  val;
    }
}