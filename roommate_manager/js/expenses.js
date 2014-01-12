window.onload=function() { 
    initialize();
    /*Dialog Box Specific*/
    var expense_box = new Box('box', document.getElementById('zone'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
    var expense_box2 = new Box('box', document.getElementById('zone'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
    var expense_box_activated=false;
    var expense_box2_activated=false;

    expense_box.setTitle("Balance details");
    expense_box.setBody("Food: 20,25€ 05/11/2013");
    expense_box2.setTitle("Personal Expenses details");
    expense_box2.setBody("Barre de fer: 120€ 05/11/2013");

    var but = new Button('test', '-');
    var but2 = new Button('test', '-');

    but.onclick(closure);
    but2.onclick(closure2);

    expense_box.addButton(but);
    expense_box2.addButton(but2);
    
    document.getElementById('expense_box').addEventListener('click', animation);
    document.getElementById('expense_box2').addEventListener('click', animation2);
    
    function animation() {
	if (expense_box2_activated==true) {
		expense_box2.close();
		expense_box2_activated=false;
	}
	expense_box_activated=true;
	expense_box.open();
	document.getElementById('zone').style.height=105+'px';;
	expense_box.show();
    }  

    function animation2() {
	if (expense_box_activated==true) {
		expense_box.close();
		expense_box_activated=false;
	}
	expense_box2_activated=true;
	expense_box2.open();
	document.getElementById('zone').style.height=105+'px';
	expense_box2.show();
    }

    function closure(){
	document.getElementById('zone').style.height=0+'px';
    }

    function closure2() {
	document.getElementById('zone').style.height=0+'px';
    }
}
