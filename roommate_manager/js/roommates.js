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
    
    
    roommates_but[0].onclick(function() { 
	close_box(document.getElementById(roommates_list[0]+'_button'), roommates_boxes[0], 'zone_'+roommates_list[0]);
    });
    roommates_but[1].onclick(function() { 
	close_box(document.getElementById(roommates_list[1]+'_button'), roommates_boxes[1], 'zone_'+roommates_list[1]);
    });
    roommates_but[2].onclick(function() { 
	close_box(document.getElementById(roommates_list[2]+'_button'), roommates_boxes[2], 'zone_'+roommates_list[2]);
    });

    roommates_but[3].onclick(function() { 
	close_box(document.getElementById(roommates_list[3]+'_button'), roommates_boxes[3], 'zone_'+roommates_list[3]);
    });
        
    document.getElementById('bastien_button').addEventListener('click', function(){
	roommates_animation(0, this);
    });
    
    document.getElementById('geoffrey_button').addEventListener('click',function(){
	roommates_animation(1, this);
    });
    
    document.getElementById('guillaume_button').addEventListener('click',function(){
	roommates_animation(2, this);
    });

    document.getElementById('remi_button').addEventListener('click',function(){
	roommates_animation(3, this);
    });

    for(var j = 0; j < roommates_list.length; j++) {
	roommates_boxes[j].open();
	roommates_boxes[j].show();
    }

    function roommates_animation(i, button) {
	for(var j = 0; j < roommates_list.length; j++) {
	    if(j!=i) {
		close_box(document.getElementById(roommates_list[j]+'_button'), roommates_boxes[j], 'zone_'+roommates_list[j]);
	    }
	}
	toggle_box(button, roommates_boxes[i], 'zone_'+roommates_list[i]);
    }
}
