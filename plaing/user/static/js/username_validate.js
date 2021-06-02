function username_validate() {
	
    var email = document.getElementById("_email").value;
    var username = document.getElementById("usrname").value;
    var password  = document.getElementById("psw").value; 

	var cont = false;
	
	emailBorderColor = document.getElementById("_email").style.borderColor
	pswBorderColor = document.getElementById("psw").style.borderColor
	rpswBorderColor = document.getElementById("rpsw").style.borderColor

	if ((emailBorderColor == "green") && (pswBorderColor == "green") && (rpswBorderColor == "green")) {
		console.log(email, username, password);
		document.getElementById("stop-check-error").style.display = "none";
		$.ajax({
			type:"POST",
			url:"/account/validate/",
			data:{
			'email':email,
			'username':username,
			'password':password
			},
			dataType:"text",
			success: function (response) {
				var json = JSON.parse(response);
				if (json.status == true) {
					console.log("Data is correct")
					document.getElementById("name-error").style.display = "none";
					document.getElementById("email-error").style.display = "none";
					document.getElementById("_form").submit();
				} else if (json.status == "UsernameIncorrect") {
					console.log("UsernameIncorrect");
					document.getElementById("name-error").style.display = "block";
				
				} else if (json.status == "EmailIncorrect") {
					console.log("EmailIncorrect");
					document.getElementById("email-error").style.display = "block";
				}
			}
		})
	} else {
		document.getElementById("stop-check-error").style.display = "block";
	}

}