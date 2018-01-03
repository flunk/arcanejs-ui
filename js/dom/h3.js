class H3 extends Element {
    constructor(blueprint) {
        if(typeof blueprint === "object"){ //New style
            blueprint.domtype = "h3";
            super(blueprint);
        } else { //Old style
            super("h3");
            this.setText(blueprint);
        }

      	return this;
    }
}