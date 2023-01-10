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

function hide_text(c) {
	var x = document.getElementById(c);
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}




let slideIndex = [1,1,1];
let slideId = ["algorithm_slides", "migration_slides", "extraction_slides"];
let dotId = ["algorithm_dots", "migration_dots", "extraction_dots"];

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}

  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace("active", dotId[no]);
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex[no]-1].className += " active";
}