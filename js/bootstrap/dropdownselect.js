class DropdownSelect extends Element {
    constructor( placeholder, multiple, className ){
        super("select", className);
        if( placeholder ){
           this.setAttribute("placeholder", placeholder);
        }
        
        if (multiple) {
            this.setAttribute("multiple", "");
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
    constructor( placeholder, hideInput, className ){
                               super("option", className);
               if( placeholder ){
               this.setAttribute("placeholder", placeholder);
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
