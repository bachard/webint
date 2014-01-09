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
	
	// we add the elements to the div 
	this.element.appendChild(this.title);
	this.element.appendChild(this.body);
	this.element.appendChild(this.buttons_section);
	
	if(this.buttons) {
	    //var buttons_section = this.element.querySelector(".dialog_buttons");
	    for(b in this.buttons) {
		this.buttons_section.appendChild(this.buttons[b].element);
	    }
	}

	// querySelector: selector with the same pattern as the css
	// ex: <div id="test">
	//       <span class="class">
	// ...
	// querySelector("#test .class") -> returns the span object
	
    }

    this.setTitle = function(title) {
	this.title.innerHTML = title;//'<header class="dialog_header">'+title+'</header>';
	this.refresh();
    }
    
    this.setBody = function(body) {
	this.body.innerHTML = body;//'<section class="dialog_body">'+body+'</section>';
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
    
    // we create a div in the html document
    this.element = document.createElement('div');
    
    this.element.id = id;
    this.setWidth(width);
    this.setHeight(height);
    //this.element.width = width + 'px';
    //this.element.height = height + 'px';
    this.element.className = 'expense_box';
    this.title = document.createElement('header');
    this.title.className = 'expense_header';
    this.body = document.createElement('section');
    this.body.className = 'expense_body';
    this.buttons_section = document.createElement('section');
    this.buttons_section.className = 'dialog_buttons';
    // object containing all the buttons of the box
    // Button object
    this.buttons = {};
}

/**
 * Button class
 *
 */

function Button(id, name) {
    
    this.id = id;
    this.element = document.createElement('button');
    this.element.id = id;
    this.element.innerHTML = name;
    
    this.onclick = function(callback) {
	this.element.addEventListener('click', callback);
    }

}
