class Button extends Element {
    constructor(caption, className, id){
        if (className != null) {
            super("button", className, id);
        } else {
            super("button", "btn btn-primary");
        }

        if (caption == "&times;") {//innerHTML is a security risk, this is the only exception
            this.element.innerHTML = caption;
        } else {
            this.element.innerText = caption;
        }
    }
}