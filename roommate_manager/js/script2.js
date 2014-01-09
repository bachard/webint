window.onload=function() {

	var dialog_box = new Box('box', 500, 300);

	dialog_box.setTitle("Add an expense");
	dialog_box.setBody("20,25€");

	var but = new Button('test', 'quit');

	but.onclick(function() { dialog_box.hide() });

	dialog_box.addButton(but);

	document.getElementById('expense_box').addEventListener('click', function() { dialog_box.show() });
}
