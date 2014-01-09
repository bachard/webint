window.onload=function() { 

var expense_box = new Box('box', document.getElementById('place_here'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');

    expense_box.setTitle("Add an expense");
    expense_box.setBody("+20,25€");

    var but3 = new Button('test', 'quit');

    but3.onclick(function() { expense_box.hide() });

    expense_box.addButton(but3);
    
    document.getElementById('expense_box').addEventListener('click', function() { expense_box.open(); expense_box.show(); });

}
