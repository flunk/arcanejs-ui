class Modal extends Div {
    constructor(title, closeButton, content, button){
		super("modal fade");
      	this.dialog = new Div("modal-dialog");
  		this.content = new Div("modal-content");
  		this.header = new Div("modal-header");
  		this.body = new Div("modal-body");
  		this.footer = new Div("modal-footer");
      	this.headerTitle = new Element("h4");
      	this.headerTitle.setText(title);
     
        if(closeButton){
           	this.dismissButton = new Button("&times;");
          	this.dismissButton.addAttribute("data-dismiss", "modal");
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
      
        //TODO remove this jQuery nonsense
      	$(this.element).modal('show');

        $(this.element).on('hidden.bs.modal', function () {
            document.body.removeChild(this.element);
        });
    }
}
