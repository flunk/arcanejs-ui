class Modal extends Div {
    constructor(title, closeButton, content, button){
		super("newModal", "modal fade");
      	this.dialog = new Div(null, "modal-dialog");
  		this.content = new Div(null, "modal-content");
  		this.header = new Div(null, "modal-header");
  		this.body = new Div(null, "modal-body");
  		this.footer = new Div(null, "modal-footer");
      	this.headerTitle = new Element("h4");
      	this.headerTitle.setText(title);
     
        if(closeButton){
            let attribute = new Attribute("data-dismiss", "modal");
           	this.dismissButton = new Button("&times;", "close", attribute);
            header.addChild(dismissButton);	
        }
      
      	if(content != null){
    		this.body.addChild(content);
    	}
      
      	if(button != null){
      		this.footer.addChild(button);
    	}
      
      	this.element.addChild(this.dialog);
        this.dialog.addChild(this.content);
        this.content.addChild(this.header);
        this.header.addChild(this.headerTitle);
        this.content.addChild(this.body);
        this.content.addChild(this.footer);
      	
        document.body.appendChild(this.element);
        $('#newModal').modal('show');

        $('#newModal').on('hidden.bs.modal', function () {
            document.body.removeChild(this.element);
        });
    }
}