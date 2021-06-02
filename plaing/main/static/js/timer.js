


function likes_ask(){
	
	$.ajax({
		type:"POST",
		url:"/games/like_check/",
		data:{		},
		dataType:"text",
		success: function (response) {
			var json = JSON.parse(response);
			if (json.status == "ok") {
                console.log("True")
				for (var i = 0; i < json.games.length; i++) {
					document.getElementById(json.games[i][0] + 'dc').innerText = json.games[i][2]
					document.getElementById(json.games[i][0] + 'lc').innerText = json.games[i][1]
				}
                // console.log(json.games[0])
				console.log(response)
			} else {
                console.log("error")
                
            } 
		}
	})

}

setInterval(likes_ask, 2000);