window.onload=function() { 

    var arrayLines = document.getElementById("synthesis").rows; //l'array est stocké dans une variable

    for(var i = 0; i < arrayLines.length; i++)
    {
	if(i % 2 == 0) 	{
	    //si la clé est paire
            arrayLines[i].style.backgroundColor = "#bdcbf5";
	}
	
	else {
	    //elle est impaire
            arrayLines[i].style.backgroundColor = "#829eeb";
	}
    }
}
