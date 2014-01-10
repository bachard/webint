window.onload=function() { 

    var expense_box = new Box('box', document.getElementById('place_here'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
    var expense_box2 = new Box('box', document.getElementById('place_here'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');

    expense_box.setTitle("Expenses details");
    expense_box.setBody("Food: 20,25€ 05/11/2013");
    expense_box2.setTitle("Personal Expenses details");
    expense_box2.setBody("Barre de fer: 120€ 05/11/2013");

    var but = new Button('test', 'quit');
    var but2 = new Button('test', 'quit');

    but.onclick(closure);
    but2.onclick(closure2);

    expense_box.addButton(but);
    expense_box2.addButton(but2);
    
    document.getElementById('expense_box').addEventListener('click', animation );
    document.getElementById('expense_box2').addEventListener('click', animation2 );
    
    function animation() {
	expense_box.open();
	document.getElementById('zone').style.height=105+'px';
	expense_box.show();
    }  

    function animation2() {
	expense_box2.open();
	document.getElementById('zone').style.height=105+'px';
	expense_box2.show();
}

    function closure(){
	document.getElementById('zone').style.height=0+'px';
	
	expense_box.close()
    }

    function closure2() {
	document.getElementById('zone').style.height=0+'px';
	
	expense_box2.close()
}
}
