
	
	
	
function validateInput(){
	
	var Name = document.getElementById("Name").value;
	var Email= document.getElementById("Email").value;
	var pass = document.getElementById("Password").value;
	var confirmPass =document.getElementById("ConfirmPassword").value;
	
	

	
	
	
	console.log("Form Submitted!"); 
	// if confirm name not entered
	if(Name === ""){
		alert("please enter Name");
		return false;
	}
	
	//if email not entered
	if(Email === "") {
        alert( "Email is required");
		 return false;
	}
	//password validate 
	 if (pass === ''){
          alert ("Please enter Password");		 
	  return false;
	 }
                      
        // If confirm password not entered
            if (confirmPass === ''){
             alert ("Please enter confirm password");
		 return false;
			}
			
            // if it does not match          
         if(pass != confirmPass)  
  {   
    alert("Passwords did not match");  
	return false;
  } else {  
    alert(" yay! Password created successfully");  
  }  

 
  return true; 
}





function validateForm(){
var Name = document.getElementById("Name").value
var Email= document.getElementById("Email").value	
var message = document.getElementById("message").value


if(Name === ""){
		alert("please enter Name");
		return false;
	}
	if(Email === "") {
        alert( "Email is required");
		 return false;
   
}

  if(message === "") {
        alert("Please Enter a Message");
        return false;      
    }



return true; 
}


		
	function validateForm(){
			alert("out soon");
			}