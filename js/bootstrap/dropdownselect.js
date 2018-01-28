class DropdownSelect extends Element {
    constructor( blueprint, multiple, className ){
        if(typeof blueprint === "object") { //New style
            blueprint.domtype = "select";
            if (blueprint.hasOwnProperty('options')) {
                if (blueprint.options.multiple) {
                    this.setAttribute("multiple", "");
                }
            }
            super(blueprint);
        } else { //Old style
            super("select", className);
            if( blueprint ){
                this.setAttribute("placeholder", blueprint);
            }
            
            if (multiple) {
                this.setAttribute("multiple", "");
            }
        }
        return this;
    }
    
    get value(){
        let returnValues = [];
        for (let optionsIterator = 0; optionsIterator < this.element.options.length; optionsIterator++) {
            if (this.element.options[optionsIterator].selected) {
                returnValues.push(this.element.options[optionsIterator].value);
            }
        }
        if (returnValues.length === 1) {
            return returnValues[0];
        }
        else {
            return returnValues;
        }
    }
    
    set value(val){
        this.element.value = val;
    }
}

class DropdownSelectItem extends Element {
    constructor( blueprint, className ){
        if(typeof blueprint === "object") { //New style
            blueprint.domtype = "option";
            if (blueprint.hasOwnProperty('options')) {
                if (blueprint.options.type) {
                    this.setAttribute("type", blueprint.options.type);
                }
            }
            super(blueprint);
        } else { //Old style
            super("option", className);
            if( blueprint ){
                this.setAttribute("placeholder", blueprint);
            }
        }
        return this;
    }
    
    select() {
        this.element.selected = true;
    }
    
    get value(){
        return this.element.value; 
    }
    
    set value(val){
        this.element.value = val;
    }
    
    get text(){
        return this.element.text; 
    }
    
    set text(val){
        this.element.text = val;
    }
}
