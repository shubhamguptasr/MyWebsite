function lastMod(){
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	update = new Date(document.lastModified)
	theMonth  = monthNames[update.getMonth()] 
	theDate = update.getDate()
	theYear = update.getFullYear()
	document.writeln("<I>  Last updated by Shubham Gupta - " + theMonth + "  " + theDate + "  " + theYear + "</i>") 
}
// Code It (Unit 5)
//Toggle for menu bar
function slide(){
	document.getElementById("pages").style.width='200px'; //makes the width of nav bar 200 pixels
/*	if(chk.style.display === 'none'){
		chk.style.display = 'block';
	}else{
		chk.style.display = 'none';	
	}*/
}

function closeslide(){
	document.getElementById("pages").style.width='0px'; //makes the width of the nav bar 0 pixels
}

//Slideshow for pictures
setInterval(autoslide,2000) //calls the function autoslide below and excecutes it every 2 seconds as soon as page loads
var img = ["Images/halfwave.png","Images/halfwave2.png","Images/halfwave3.png"]; //array of images for Proj1
var img2 =["Images/portfolio.png","Images/portfolio2.png","Images/portfolio3.png"]; //array of images for Proj2
var x,y = 0; //declares the variables x and y which will be used for array's position

function autoslide(){
	document.getElementById("slide").src = img[x]; //finds the element id "slide" in document and access the source to show the first img in array (img[0]).
	if (x<(img.length-1)) //uses .length property to get the total length of array, which is 3 and subtracts 1 to accomodate for the array length
		x++; //checks if statement is true and increments the array position by 1
	else{
		x = 0; //else sets it back to position of 0
	}
	document.getElementById("slide2").src = img2[y]; //finds the element id "slide" in document and access the source to show the first img in array (img[0]).
	if(y<(img2.length-1)) //uses .length property to get the total length of array, which is 3 and subtracts 1 to accomodate for the array length
		y++; //checks if statement is true and increments the array position by 1
	else{
		y =0;//else sets it back to position of 0
	}
}
