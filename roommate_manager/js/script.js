window.onload=function() { 
    
    /* Basic example of how to use a box, with the buttons */
    
    /*
   var divanim = document.createElement('div');
    divanim.className = 'animation';
    document.body.appendChild(divanim);
    */
    // we create the box
    var dialog_box = new Box('box', document.body, 500, 300);
    // we init the box
    dialog_box.setTitle("Nice box");
    // dialog_box.setBody("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie erat vel felis viverra, in interdum eros sollicitudin.");
    // how to import external html directly in the box body
    
    dialog_box.importHTML("source/table.html"); 
    // we create the buttons for the box
    var but = new Button('test', 'quit');
    var but1 = new Button('test1', 'test');
    var but2 = new Button('test2', 'test');
    // we bind the events
    but.onclick(function() { dialog_box.hide() });
    but1.onclick(function() { alert(' ') });
    // we add the buttons to the box
    dialog_box.addButton(but);
    dialog_box.addButton(but1);
    dialog_box.addButton(but2);
    /* end of example */

    // ex. of how to bind an event to the onclick event of a button defined in html
    // and not in the js file
    document.getElementById('add_expense').addEventListener('click', function() { dialog_box.open(); dialog_box.show(); });
    
    /*
     * Test de drag and drop sur une image
     *
     
    document.getElementById('personal_img').addEventListener('dragstart', function(event) { 
	console.log('drag');
	console.log(event.screenX + ", " + event.screenY);
	this.startX = event.screenX;
	this.startY = event.screenY;
    });
    document.getElementById('personal_img').addEventListener('drop', function() {
	console.log('drop'); 
    });
    document.getElementById('personal_img').addEventListener('dragend', function(event) { 
	console.log(event.screenX + ", " + event.screenY);
	console.log(event);
	this.style.position = "absolute";
	shiftX = this.offsetLeft + event.screenX - this.startX;
	shiftY = this.offsetTop + event.screenY - this.startY;
	console.log(shiftY);
	this.style.left = shiftX + 'px';
	this.style.top = shiftY + 'px';
	//event.screenX;
	this.style.color = "#cccccc";
	this.parentNode.removeChild(this);
	document.body.appendChild(this);
    });
    */
    
}
