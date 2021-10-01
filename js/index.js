function lastMod(){
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	update = new Date(document.lastModified)
	theMonth  = monthNames[update.getMonth()] 
	theDate = update.getDate()
	theYear = update.getFullYear()
	document.writeln("<I>  Last updated by Shubham Gupta - " + theMonth + "  " + theDate + "  " + theYear + "</i>") 
}
function flash() {
    var text = document.getElementById('colorchange');
    text.style.color = (text.style.color=='black') ? '#E83555':'black';
}
var clr = setInterval(flash, 1000);

// Code It (Unit 5)

//Toggle for menu bar
function slide(){
  document.getElementById("pages").style.width='200px'; //makes the width of nav bar 200 pixels
  /*if(chk.style.display === 'none'){ *Adapted from W3SC
    chk.style.display= 'block';
  }
  else{
    chk.style.display= 'none'; 
  }*/
}

function closeslide(){
	document.getElementById("pages").style.width='0'; //makes the width of the nav bar 0 pixels
}