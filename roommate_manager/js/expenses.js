window.onload=function() { 

var expense_box = new Box('box', document.getElementById('place_here'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');

    expense_box.setTitle("Expenses details");
    expense_box.setBody("Food: 20,25€ 05/11/2013");

    var but3 = new Button('test', 'quit');

    but3.onclick( closure );

    expense_box.addButton(but3);
    
    document.getElementById('expense_box').addEventListener('click', animation );
    
    function animation() {
	expense_box.open();
	document.getElementById('zone').style.height=100+'px';
	expense_box.show();
    }

    function closure(){
	document.getElementById('zone').style.height=0+'px';
	/*expense_box.hide()*/
    }
}
