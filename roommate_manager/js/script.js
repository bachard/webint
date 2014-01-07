

/**
 * Draft of the dialog box
 *
 */

function Box(id, width, height) {
    
    this.show = function() {
	document.body.appendChild(this.element);
    }
    
    this.hide = function() {
	document.body.removeChild(this.element);
    }
    
    this.refresh = function() {
	this.element.innerHTML = 
	    '<header class="dialog_header">'+this.title+'</header>'+
	    '<section class="dialog_body">'+this.body+'</section>';
	if(this.buttons) {
	    this.element.innerHTML += '<section class="dialog_buttons"></section>';
	    var buttons_section = this.element.querySelector(".dialog_buttons")
	    for(b in this.buttons) {
		buttons_section.appendChild(this.buttons[b].element);
	    }
	}
    }

    this.setTitle = function(title) {
	this.title = title;
	this.refresh();
    }
    
    this.setBody = function(body) {
	this.body = body;
	this.refresh();
    }
    
    this.setWidth = function(width) {
	this.element.style.width = width + 'px';
    }

    this.setHeight = function(height) {
	this.element.style.height = height + 'px';
    }

    this.addButton = function(button) {
	this.buttons[button.id] = button;
	this.refresh();
    }
    
    this.element = document.createElement('div');
    this.element.id = id;
    this.setWidth(width);
    this.setHeight(height);
    //this.element.width = width + 'px';
    //this.element.height = height + 'px';
    this.element.className = 'dialog_box';
    this.title = null;
    this.body = null;
    this.buttons = {};
}

function Button(id, name) {
    
    this.id = id;
    this.element = document.createElement('button');
    this.element.id = id;
    this.element.innerHTML = name;
    
    this.prout = function(callback) {
	alert(' ');
	this.element.addEventListener('click', alert(' '));
    }

}

var dialog_box = new Box('box', 500, 300);
dialog_box.setTitle("Test");
dialog_box.setBody("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie erat vel felis viverra, in interdum eros sollicitudin.");

var but = new Button('test', 'test');
var but1 = new Button('test1', 'test');
var but2 = new Button('test2', 'test');

but.prout(toggle_box);


dialog_box.addButton(but);
dialog_box.addButton(but1);
dialog_box.addButton(but2);

function toggle_box() {
    if(!document.getElementById('box')) {
	dialog_box.show();
    }
    else {
	dialog_box.hide();
    }
}
