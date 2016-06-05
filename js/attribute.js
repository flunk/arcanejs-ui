function Attribute(name, value) {
    //constructor(name, value){
    var attr = document.createAttribute(name);
    attr.value = value;
    return attr;
}