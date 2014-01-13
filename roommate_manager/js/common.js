function initialize() { 
    
    /* Add an Expense DialogBox*/
    
    var add_expense_box = new Box('add_expense_box', document.body,580, 305);
    
    add_expense_box.setTitle("Add An Expense");
    add_expense_box.importHTML("source/add_expense.html");
    
    var add_expense_box_quit = new Button('quit', 'cancel');
    var add_expense_box_validate = new Button('validate', 'validate');
    
    add_expense_box_quit.onclick(function() { add_expense_box.close() });
    add_expense_box_validate.onclick(function() { add_expense_box.close() });
    add_expense_box.addButton(add_expense_box_quit);
    add_expense_box.addButton(add_expense_box_validate);    
    
    document.getElementById('add_expense').addEventListener('click', function() { 
	add_expense_box.open();
	add_expense_box.show();
    });

    /*Add an dialog Box to Edit Profile*/
    
    var profile_box = new Box('profile_box', document.body,500, 300);
    
    profile_box.setTitle("Edit Your Profile");
    profile_box.importHTML("source/profile.html");
    
    var profile_box_quit = new Button('quit', 'quit');
    var profile_box_validate = new Button('validate', 'ok');

    
    profile_box_quit.onclick(function() { profile_box.close() });
    profile_box_validate.onclick(function() { profile_box.close() });
    profile_box.addButton(profile_box_quit);
    profile_box.addButton(profile_box_validate);
    
    
    document.getElementById('personal_info').addEventListener('click', function() { 
	profile_box.open();
	profile_box.show();
    });


    /*Notifications Box*/

    var notifications = document.getElementsByClassName('notification');
    
    var notifications_box = new Box('notifications_box', document.body, 350, 200);

    var but_notifications_quit = new Button('notifications_quit', 'quit');
    var but_notifications_prev = new Button('notifications_prev', 'prev');
    var but_notifications_next = new Button('notifications_next', 'next');
    
    but_notifications_quit.onclick(function() { notifications_box.close(); });
    // display the previous notification
    but_notifications_prev.onclick(function() { 
	for(var j = 0; j < notifications.length; j++) {
	    if(notifications[j].getAttribute('active')) {
		// we take the modulo to do a circular review
		// by clicking we access the function used to load the content
		// trick to not rewrite the same code
		if(j!=0) {
		    notifications[(j-1)%notifications.length].click();
		}
		else { 
		    notifications[notifications.length-1].click();
		}
		return false;
	    }
	}
    });
    // display the next notification
    but_notifications_next.onclick(function() {
	for(var j = 0; j < notifications.length; j++) {
	    if(notifications[j].getAttribute('active')) {
		notifications[(j+1)%notifications.length].click();
		return false;
	    }
	}
    });
    
    notifications_box.addButton(but_notifications_quit);
    notifications_box.addButton(but_notifications_next);
    notifications_box.addButton(but_notifications_prev);
    
    notifications_box.setTitle("Notifications");
    notifications_box.importHTML("source/notification.html");

    for(var i = 0; i < notifications.length; i++) {
	notifications[i].addEventListener('click', function() {
	    for(var j = 0; j < notifications.length; j++) {
		notifications[j].removeAttribute('active');
	    }
	    notifications_box.setTitle(this.getAttribute('data-title'));
	    notifications_box.importHTML('source/notification-'+this.getAttribute('data-id')+'.html');
	    notifications_box.open();
	    notifications_box.show();
	    // attribute used to find prev and next notifs
	    this.setAttribute('active','true');
	});
    }
  
    $("body").on('focus',"#input_date",function() {
	$(this).datepicker();
    });
}

/*************************/
/*  TICK IMAGE           */
/*************************/

function tickImage(div){
    if (div.getElementsByClassName('imageTick').length==0){
        var childImage = document.createElement('img');
        childImage.className = 'imageTick';
        childImage.src ='img/checkImage.png';
        div.appendChild(childImage);}
    else {
	childs=div.getElementsByClassName('imageTick');
	for (var i=0;i<childs.length;i++){
	    div.removeChild(childs[i]);
	}
    }

}

/*************************/
/*  SELECT IMAGE         */
/*************************/

function selectImage(div) {
    
    childs = div.parentNode.getElementsByClassName('imageTick');

    for (var i=0;i<childs.length;i++){
	childs[i].parentNode.removeChild(childs[i]);
    }

    if (div.getElementsByClassName('imageTick').length==0){
	var childImage = document.createElement('img');
        childImage.className = 'imageTick';
        childImage.src = 'img/checkImage_50.png';
        div.appendChild(childImage);
    }

}

/*************************/
/*  ANIMATION            */
/*************************/

function toggle_box(button, box, cont_name) {
    var value = button.getElementsByTagName('span')[0];
    value = value ? value : button;
    if(value.innerHTML == '+') {
	value.innerHTML = '-';
	animation(cont_name, box.getHeight());
    }
    else {
	value.innerHTML = '+';
	closure(cont_name);
    }
}

function close_box(button, box, cont_name) {
    var value = button.getElementsByTagName('span')[0];
    value = value ? value : button;
    if(value.innerHTML == '-') {
	value.innerHTML = '+';
	closure(cont_name);
    }
}

function animation(cont_name, height) {
    document.getElementById(cont_name).style.height=height;
}  

function closure(cont_name){
    document.getElementById(cont_name).style.height=0;
}
