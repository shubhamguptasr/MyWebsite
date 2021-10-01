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
	document.getElementById("pages").style.width='200px'; //makes the width of the nav bar 200 pixels
	/*var chk = document.getElementById("pages"); **Adapted from W3SC to test/exprerment how toggle works 
		if(chk.style.display === 'none'){ 
		chk.style.display = 'block';
	}else{
	chk.style.display = 'none';	
	}*/
}

function closeslide(){
	document.getElementById("pages").style.width='0'; //makes the width of the nav bar 0 pixels
} 