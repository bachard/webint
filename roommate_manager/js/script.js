window.onload=function() { 

    var dialog_box = new Box('box', 500, 300);
    // We init the box
    dialog_box.setTitle("Test");
    dialog_box.setBody("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie erat vel felis viverra, in interdum eros sollicitudin.");

    var but = new Button('test', 'test');
    var but1 = new Button('test1', 'test');
    var but2 = new Button('test2', 'test');

    but.onclick(toggle_box);
    but1.onclick(function() { alert(' ') });

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
}
