/**
 * Draft of the dialog box
 *
 */

function Box(id, parent, width, height, box_class='dialog_box', header_class='dialog_header', body_class='dialog_body', buttons_class='dialog_buttons') {
        
    this.open = function() {
	if(!document.getElementById(this.element.id)) {
	    parent.appendChild(this.element);    
	}	
    }
    
    this.close = function() {
	if(document.getElementById(this.element.id)) {
	    parent.removeChild(this.element);
	}
    }

    this.show = function() {
	this.element.style.display = 'block';
    }

    this.hide = function() {
	this.element.style.display = 'none';
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
	this.title.innerHTML = title;
	this.refresh();
    }
    
    this.setBody = function(body) {
	this.body.innerHTML = body;
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
    
    // import html content directly in the body of the box
    this.importHTML = function(url) {
	var xhr = getXMLHttpRequest();
	var self = this;
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		self.setBody(xhr.responseText);
	    }
	};
	
	xhr.open("GET", url, true);
	xhr.send(null);
    }
    
    // we create a div in the html document
    this.element = document.createElement('div');
    
    this.element.id = id;
    this.setWidth(width);
    this.setHeight(height);
    //this.element.width = width + 'px';
    //this.element.height = height + 'px';
    this.element.className = box_class;
    this.hide();
    this.title = document.createElement('header');
    this.title.className = header_class;
    this.body = document.createElement('section');
    this.body.className = body_class;
    // for the body to fit in the box
    this.body.style.width = (width-5) + 'px'
    this.body.style.height = (height-67) + 'px'
    this.buttons_section = document.createElement('section');
    this.buttons_section.className = buttons_class;
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

/**
 * Useful functions
 *
 *
 */

/**
 * returns and XMLHttpRequest object 
 * compatible with (almost) all browsers
 * source: openclassroom
 */
function getXMLHttpRequest() {
    var xhr = null;
    
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    
    return xhr;
}

