function initialize() { 
    
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

    /*Add an dialog Box to Edit Profile*/
     var dialog_box2 = new Box('box', document.body,500, 300);
    
    dialog_box2.setTitle("Edit Your Profile");
    dialog_box2.importHTML("source/profile.html");
    
    var button = new Button('test', 'quit');
    var button1 = new Button('test1', 'ok');

    
    button.onclick(function() { dialog_box2.hide() });
    button1.onclick(function() { alert(' ') });
    dialog_box2.addButton(button);
    dialog_box2.addButton(button1);
   
  
    document.getElementById('personal_info').addEventListener('click', function() { dialog_box2.open(); dialog_box2.show(); });

}



