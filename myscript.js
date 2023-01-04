// JavaScript source code
var teams_index = 0;
function carousel_teams() {
	var i;
	var x = document.getElementsByClassName("teams");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	teams_index++;
	if (teams_index > x.length) {teams_index = 1}    
	x[teams_index-1].style.display = "block";  
	setTimeout(carousel_teams, 2000); // Change image every 2 seconds
	}
	
	var outdoors_index = 0;
	function carousel_outdoors() {
		var i;
		var x = document.getElementsByClassName("outdoors"); 
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		outdoors_index++;
		if (outdoors_index > x.length) {outdoors_index = 1}    
		x[outdoors_index-1].style.display = "block";  
		setTimeout(carousel_outdoors, 2000); // Change image every 2 seconds
		}