class Button extends Element {
    constructor(id, className, caption) {
        if (className != null) {
            super("button", id, className);
        } else {
            super("button", id, "btn btn-primary");
        }

        if (caption == "&times;") {//innerHTML is a security risk, this is the only exception
            this.element.innerHTML = caption;
        } else {
            this.element.innerText = caption;
        }
    }
}
