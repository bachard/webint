window.onload=function() { 
    
    /* Add an Expense DialogBox*/
    
    var dialog_box = new Box('box', document.body,500, 300);
    
    dialog_box.setTitle("Add An Expense");
    dialog_box.importHTML("source/table.html");
    
    var but = new Button('test', 'quit');
    var but1 = new Button('test1', 'test');
    var but2 = new Button('test2', 'test');
    
    but.onclick(function() { dialog_box.hide() });
    but1.onclick(function() { alert(' ') });
    dialog_box.addButton(but);
    dialog_box.addButton(but1);
    dialog_box.addButton(but2);
    
    document.getElementById('add_expense').addEventListener('click', function() { dialog_box.open(); dialog_box.show(); });
}
