class Element {
    constructor(type, id, className) {
        this.element = document.createElement(type);

        if (id != null) {
            this.element.id = id;
        }

        if (className != null) {
            this.element.className = className;
        }
    }

    //Get and set innerText
    get text() {
        return this.element.innerText;
    }

    set text(text) {
        this.element.innerText = text;
    }


    //Style operations
    get left() {
        return parseInt(this.element.style.left.replace("px", ""));
    }

    set left(val) {
        this.element.style.left = val + "px";
    }

    get top() {
        return parseInt(this.element.style.top.replace("px", ""));
    }

    set top(val) {
        this.element.style.top = val + "px";
    }

    get width() {
        let width = this.element.style.width;
        if (width == "") {
            return parseInt(styleWidth.replace("px", ""));
        } else {
            return this.element.offsetWidth;
        }
    }

    set width(val) {
        this.element.style.width = val + "px";
    }

    get height() {
        let height = this.element.style.height;
        if (height == "") {
            return parseInt(height.replace("px", ""));
        } else {
            return this.element.offsetHeight;
        }
    }

    set height(val) {
        this.element.style.height = val + "px";
    }


    //DOM operations
    addChild(child) {
        this.element.appendChild(child.element);
    }

    show() {
        document.body.appendChild(this.element);
    }
}