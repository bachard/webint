window.onload=function() { 
    
    /* Basic example of how to use a box, with the buttons */
    
    // we create the box
    var dialog_box = new Box('box', 500, 300);
    // we init the box
    dialog_box.setTitle("Nice box");
    dialog_box.setBody("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie erat vel felis viverra, in interdum eros sollicitudin.");
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
    document.getElementById('show_box').addEventListener('click', function() { dialog_box.show() });

}
