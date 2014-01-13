window.onload=function() { 
    initialize();
    /*Dialog Box Specific*/
    var nov_box = new Box('nov_box', document.getElementById('zone_nov'), 600, 300, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
    var dec_box = new Box('dec_box', document.getElementById('zone_dec'), 600, 300, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');

    nov_box.importHTML("source/november.html");

    dec_box.importHTML("source/december.html");

    var nov_box_but = new Button('nov_box_but', '-');
    var dec_box_but = new Button('dec_box_but', '-');

    nov_box_but.onclick(function() {
	close_box(document.getElementById('nov_box_expand'), nov_box, 'zone_nov');
    });
    dec_box_but.onclick(function() {
	close_box(document.getElementById('dec_box_expand'), dec_box, 'zone_dec');
    });

    nov_box.addButton(nov_box_but);
    dec_box.addButton(dec_box_but);
    
    document.getElementById('nov_box_expand').addEventListener('click', function() {
	toggle_box(this, nov_box, 'zone_nov');
    });

    document.getElementById('dec_box_expand').addEventListener('click', function() {
	toggle_box(this, dec_box, 'zone_dec');
    });
    
    nov_box.open();
    nov_box.show();
    
    dec_box.open();
    dec_box.show();
}
