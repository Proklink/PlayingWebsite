function login_validate(){
	
    var username = document.getElementById("usrname").value;
    var password  = document.getElementById("userpassword").value; 
    
    console.log(username, password);
	$.ajax({
		type:"POST",
		url:"/account/login_validate/",
		data:{
          'username':username,
          'password':password
		},
		dataType:"text",
		success: function (response) {
			var json = JSON.parse(response);
			if (json.status == "ok") {
                console.log("True")
                document.getElementById("login-error-message").style.display = "none";
                document.getElementById("_form").submit()
			} else {
                console.log("error")
                document.getElementById("login-error-message").style.display = "block";
            } 
		}
	})

}