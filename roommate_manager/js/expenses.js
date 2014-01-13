window.onload=function() { 
    initialize();
    /*Dialog Box Specific*/
    var balance_box = new Box('balance_box', document.getElementById('zone_balance'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
    var personal_box = new Box('personal_box', document.getElementById('zone_personal'), 500, 250, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');

 
    balance_box.importHTML("source/balance.html");

 
    personal_box.importHTML("source/list_expenses.html");

    var balance_box_but = new Button('balance_box_but', '-');
    var personal_box_but = new Button('personal_box_but', '-');

    balance_box_but.onclick(function() {
	close_box(document.getElementById('balance_box_expand'), balance_box, 'zone_balance');
    }); 
    
    personal_box_but.onclick(function() {
	close_box(document.getElementById('personal_box_expand'), personal_box, 'zone_personal');
    });  

    balance_box.addButton(balance_box_but);
    personal_box.addButton(personal_box_but);
    
    document.getElementById('balance_box_expand').addEventListener('click', function() {
	toggle_box(this, balance_box, 'zone_balance');
    });

    document.getElementById('personal_box_expand').addEventListener('click', function() {
	toggle_box(this, personal_box, 'zone_personal');
    });
    
    balance_box.open();    
    balance_box.show();
    
    personal_box.open();
    personal_box.show();
}
