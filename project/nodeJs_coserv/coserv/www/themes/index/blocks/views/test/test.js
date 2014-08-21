ctrl.startup = function() {
	console.log("HELLO");	
};

ctrl.getValue2 = function(){
	var x = document.getElementById("myHeader2");
	alert(x.innerHTML);	
};

ctrl.getColor = function(){
	var oColors = document.getElementsByName("rdColor");
	var color = "";
	for(var i=0; i < oColors.length; i++){
		if(oColors[i].checked){
			color = oColors[i].value;
			break;
		}
	}

	if(color == "")
		alert("Please choose a color!!");
	else
		alert("Your favorite color is: " + color);

};