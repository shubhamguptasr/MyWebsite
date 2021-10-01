function DisplayVisits() 
 {    
  // How many visits so far? 
      var numVisits = GetCookie("numVisits"); 
      if (numVisits) numVisits = parseInt(numVisits) + 1; 
      else numVisits = 1; // the value for the new cookie 
  
  // Show the number of visits 
      if (numVisits==1) document.write("<b> This is your first visit. </b>"); 
      else document.write("<b> You have visited this page </b><b>" + numVisits + "</b><b> times. </b>"); 
  
  // Set the cookie to expire 365 days from now 
      var today = new Date(); 
      today.setTime(today.getTime() + 365 /*days*/ * 24 /*hours*/ * 60 /*minutes*/ * 60 /*seconds*/ * 1000 /*milliseconds*/); 
      SetCookie("numVisits", numVisits, today); 
  } 

// Cookie functions
// Some code based on the article by James Wondrasek, "The way cookie crumbles",
// Internet.au magazine
function SetCookie (name,value,expires,path,domain,secure) 
{
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toUTCString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}
function DeleteCookie (name,path,domain) 
{
  if (GetCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
function GetCookie (name) 
{
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
  }
  return null;
}
function getCookieVal (offset)
{
	var str = document.cookie.indexOf(";", offset);
	if(str==-1) str = document.cookie.length;
	return unescape(document.cookie.substring(offset, str));
}
// Code It (Unit 5)

//Toggle for menu bar **further developed from W3Sc

function slide(){
  document.getElementById("pages").style.width='200px'; //makes the width of the nav bar 200 pixels
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

//Form Validation
function  FormVal(){
  var regExp = /^[a-zA-Z]+$/; //variable declartion for regular expression for ONLY letters 
  var UserName = document.getElementById("Name").value; //variable declartions for all the field values on the form
  var Email = document.getElementById("Email").value;
  var Subject = document.getElementById("Subject").value;
  var Msg = document.getElementById("Msg").value;

  if(UserName==""){ //checks if username field is empty
    swal("...Oops", "Name cannot be Blank!", "error"); //returns the error message if true
    return false; //avoids the form from being submitted! **used for all the if statements below
  }
  if(UserName.length < 2 || (UserName.length > 15) ){ //checks if username field lenght is less than 2 OR greater than 15
    swal("...Oops", "Name must be between 2-15 letters!", "error"); //returns the error message if true
    return false;
  }
  if(UserName.match(regExp)) //checks if the string has matches to ONLY letters
    true; //nothing happens if true
    else{ 
      swal("...Oops", "Name can ONLY contain letters!", "error");//returns error message if false
      return false;
      }
  if(Email==""){ //checks if E-mail field is empty if true returns error message
    swal("...Oops", "E-mail cannot be blank!", "error");
    return false;
  }    
  if(Email.indexOf('@')<=0){ //uses indexOf method to check if the position of @ is less than or equal to zero, if true returns error message
    swal("...Oops", "E-mail is invalid!", "error");
    return false;
    }  
  if((Email.charAt(Email.length-4)!='.') && (Email.charAt(Email.length-3)!='.')) { //uses charAt method to check the position of '.' and if it does not equal to length-4 and length-3, returns error message
    swal("...Oops", "Invalid E-mail format!", "error");
    return false;
  }
  if(Subject==""){ //checks if subject field is empty if true returns error message
    swal("...Oops", "Subject cannot be blank!", "error");
    return false;  
  }
  if(Msg==""){ //checks if msg field is empty if true returns error message
    swal("...Oops", "Message cannot be blank!", "error");
    return false;
  }else{
    swal("Thank You!", "Your form was successfully submitted", "success");
    document.getElementById("reset").reset();
  }
}
