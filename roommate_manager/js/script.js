function box() {
    if(!document.getElementById('box')) {
	var box = document.createElement('div');
	box.width = 320;
	box.height = 240;
	box.id = "box";    
	box.innerHTML = '<header class="dialog_header">Titre</header><section class="dialog_body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie erat vel felis viverra, in interdum eros sollicitudin.</section>';
	box.className = 'dialog_box';
	document.body.appendChild(box);
    }
    else {
	console.log("Already exists");
    }
}
