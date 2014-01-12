window.onload=function() { 
    initialize();
    /*Dialog Box Specific*/
    var expense_box = new Box('coco_box', document.getElementById('zone'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
    var expense_box2 = new Box('coco_box2', document.getElementById('zone2'), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');

    expense_box.setTitle("Summary of November");
    expense_box.setBody("Mettez ce que vous voulez");

    expense_box2.setTitle("Summary of December");
    expense_box2.setBody("Mettez ce que vous voulez");

    var but = new Button('test', '-');
    var but2 = new Button('test', '-');

    but.onclick(closure);
    but2.onclick(closure2);

    expense_box.addButton(but);
    expense_box2.addButton(but2);
    
    document.getElementById('history_box').addEventListener('click', animation);
    document.getElementById('history_box2').addEventListener('click', animation2);
    
    function animation() {
	expense_box.open();
	document.getElementById('zone').style.height=105+'px';;
	expense_box.show();
    }  

    function animation2() {
	expense_box2.open();
	document.getElementById('zone2').style.height=105+'px';
	expense_box2.show();
    }

    function closure(){
	document.getElementById('zone').style.height=0+'px';
    }

    function closure2() {
	document.getElementById('zone2').style.height=0+'px';
    }
}
