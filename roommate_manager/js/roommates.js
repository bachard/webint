window.onload=function() { 
    initialize();

    var roommates_boxes=[];
    var roommates_but=[];
    var roommates_list=['bastien','geoffrey','guillaume','remi'];
    for (var i=0;i<roommates_list.length;i++){
	roommates_boxes[i] = new Box(roommates_list[i]+'_box', document.getElementById('zone_'+roommates_list[i]), 500, 100, 'expense_box', 'expense_header', 'expense_body', 'expense_buttons');
	roommates_boxes[i].setTitle(roommates_list[i]);
	roommates_boxes[i].importHTML("source/profile_"+roommates_list[i]+".html");
	roommates_but[i] = new Button(roommates_list[i]+'_expand', '-');
	
	roommates_boxes[i].addButton(roommates_but[i]);
    }
    
    roommates_but[0].onclick(function() { closure(0) });
    roommates_but[1].onclick(function() { closure(1) });
    roommates_but[2].onclick(function() { closure(2) });
    roommates_but[3].onclick(function() { closure(3) });
    
    document.getElementById('bastien_button').addEventListener('click', function(){
	animation(0)
    });
    
    document.getElementById('geoffrey_button').addEventListener('click',function(){
	animation(1)
    });
    
    document.getElementById('guillaume_button').addEventListener('click',function(){
	animation(2)
    });
    document.getElementById('remi_button').addEventListener('click',function(){
	animation(3)
    });

    function animation(i) {
	for(var j = 0; j < roommates_list.length; j++) {
	    if(j!=i) {
		closure(j);
	    }
	}
	roommates_boxes[i].open();
	document.getElementById('zone_'+roommates_list[i]).style.height=130+'px';
	roommates_boxes[i].show();
    }  

    function closure(i) {
	document.getElementById('zone_'+roommates_list[i]).style.height=0+'px';
    }
}
