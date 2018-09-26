 
  var fname = document.forms["myForm"]["fname"].value;
  var lname=document.forms["myForm"]["lname"].value;
  var email=document.forms["myForm"]["email"].value;
  var password=document.forms["myForm"]["password"].value;


  var fname-error=document.getElementById("fname-error");
  var lname-error=document.getElementById("lname-error");
  var email-error=document.getElementById("email-error");
  var password-error=document.getElementById("password-error");
  
//eventlisteners

 fname.addEventlistener("blur",fnameverify,true); 
 lname.addEventlistener("blur",lnameverify,true); 
 email.addEventlistener("blur",emailverify,true); 
 password.addEventlistener("blur",passwordverify,true); 


 //validation function
 function validate(){
 	if(fname.value==""){
 		fname.style.border="1px solid red";
 		fname-error.textcontent="first name is required"
 		fname.focus();
 		return false;
  }
  if(lname.value==""){
 		lname.style.border="1px solid red";
 		lname-error.textcontent="last name is required"
 		lname.focus();
 		return false;
  }
  if(email.value==""){
 		email.style.border="1px solid red";
 		email-error.textcontent="email  is required"
 		email.focus();
 		return false;
  }
if(password.value==""){
 		password.style.border="1px solid red";
 		password-error.textcontent="password is required"
 		password.focus();
 		return false;
  }
 }
 //event verication
 function fnameverify(){
 	if(fname.value!=""){
 		fname.style.border="1px solid #5E6E66";
 		fname-error.innerHTML="";
 		return true;
 	}
 }
 function fnameverify(){
 	if(lname.value!=""){
 		lname.style.border="1px solid #5E6E66";
 		lname-error.innerHTML="";
 		return true;
 	}
 }
 function fnameverify(){
 	if(email.value!=""){
 		email.style.border="1px solid #5E6E66";
 		email-error.innerHTML="";
 		return true;
 	}
 }
 function fnameverify(){
 	if(password.value!=""){
 		password.style.border="1px solid #5E6E66";
 		password-error.innerHTML="";
 		return true;
 	}
 }
 function submit(e) {
 	e.preventDefault();
 }