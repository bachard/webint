function initialize() { 
    
    /* Add an Expense DialogBox*/
    
    var add_expense_box = new Box('add_expense_box', document.body,650, 300);
    
    add_expense_box.setTitle("Add An Expense");
    add_expense_box.importHTML("source/add_expense.html");
    
    var add_expense_box_quit = new Button('quit', 'quit');
    var add_expense_box_validate = new Button('validate', 'ok');
    
    add_expense_box_quit.onclick(function() { add_expense_box.close() });
    add_expense_box_validate.onclick(function() { add_expense_box.close() });
    add_expense_box.addButton(add_expense_box_quit);
    add_expense_box.addButton(add_expense_box_validate);    
  
    document.getElementById('add_expense').addEventListener('click', function() { 
	console.log('add_expense');
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
	console.log('profile');
	profile_box.open();
	profile_box.show();
    });


    /*Notifications Box*/

    var notifications_box = new Box('notifications_box', document.body, 500,300);

    var but_notifications_quit = new Button('notifications_quit', 'quit');
    var but_notifications_prev = new Button('notifications_prev', 'prev');
    var but_notifications_next = new Button('notifications_next', 'next');
    
    but_notifications_quit.onclick(function() { notifications_box.close(); });
    but_notifications_prev.onclick(function() { notifications_box.close(); });
    but_notifications_next.onclick(function() { notifications_box.close(); });
    
    notifications_box.addButton(but_notifications_prev);
    notifications_box.addButton(but_notifications_next);
    notifications_box.addButton(but_notifications_quit);

    notifications_box.setTitle("Notifications");
    notifications_box.importHTML("source/notification.html");

    
    var notifications = document.getElementsByClassName('notification');
   
    for(var i = 0; i < notifications.length; i++) {
	// console.log(notifications[i]);
	notifications[i].addEventListener('click', function() {
	    notifications_box.setTitle(this.getAttribute('data-title'));
	    notifications_box.importHTML('source/notification-'+this.getAttribute('data-id')+'.html');
	    notifications_box.open();
	    notifications_box.show();
	});
    }
}



