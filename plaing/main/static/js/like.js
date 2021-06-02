var ajax_like_handler = function(data){
  console.log("ajax_like_handler")
  if (data['status'] == 'ok')
  {
    var game_id = data['id']
    var previous_action = $('#l'+game_id).data('action');
    // toggle data-action
    //$('#l'+game_id).data('action', previous_action == 'like' ? 'unlike' : 'like');
    if (previous_action == 'like') {
      $('#l'+game_id).data('action', 'unlike');
      $('#d'+game_id).data('action', 'dislike');
    } else {
      $('#l'+game_id).data('action', 'like');
    }

    // toggle link text
    var likes_counter = Number(document.getElementById(game_id + 'lc').innerText);
    var dislikes_counter = Number(document.getElementById(game_id + 'dc').innerText);
    if (previous_action == 'like') {
      console.log("like")
      document.getElementById(game_id + 'lc').innerText = likes_counter + 1;
      if (document.getElementById(game_id + 'disliked').style.display == "block")
        document.getElementById(game_id + 'dc').innerText = dislikes_counter - 1;
      document.getElementById(game_id + 'liked').style.display = "block";
      document.getElementById(game_id + 'f-up').style.display = "none";
      document.getElementById(game_id + 'disliked').style.display = "none";
      document.getElementById(game_id + 'f-down').style.display = "block";
    } else {
      console.log("unlike")
      document.getElementById(game_id + 'lc').innerText = likes_counter - 1;
      document.getElementById(game_id + 'liked').style.display = "none";
      document.getElementById(game_id + 'f-up').style.display = "block";
      document.getElementById(game_id + 'disliked').style.display = "none";
      document.getElementById(game_id + 'f-down').style.display = "block";
    }
  }
}

var ajax_dislike_handler = function(data){
  console.log("ajax_dislike_handler")
  if (data['status'] == 'ok')
  {
    var game_id = data['id']
    var previous_action = $('#d'+game_id).data('action');

    // toggle data-action
    //$('#d'+game_id).data('action', previous_action == 'dislike' ? 'undislike' : 'dislike');
    if (previous_action == 'dislike') {
      $('#l'+game_id).data('action', 'like');
      $('#d'+game_id).data('action', 'undislike');
    } else {
      $('#d'+game_id).data('action', 'dislike');
    }
    // toggle link text
    var likes_counter = Number(document.getElementById(game_id + 'lc').innerText);
    var dislikes_counter = Number(document.getElementById(game_id + 'dc').innerText);
    if (previous_action == 'dislike') {
      console.log("dislike")
      document.getElementById(game_id + 'dc').innerText = dislikes_counter + 1;
      if (document.getElementById(game_id + 'liked').style.display == "block")
        document.getElementById(game_id + 'lc').innerText = likes_counter - 1;
      document.getElementById(game_id + 'liked').style.display = "none";
      document.getElementById(game_id + 'f-up').style.display = "block";
      document.getElementById(game_id + 'disliked').style.display = "block";
      document.getElementById(game_id + 'f-down').style.display = "none";
    } else {
      console.log("undislike")
      document.getElementById(game_id + 'dc').innerText = dislikes_counter - 1;
      document.getElementById(game_id + 'liked').style.display = "none";
      document.getElementById(game_id + 'f-up').style.display = "block";
      document.getElementById(game_id + 'disliked').style.display = "none";
      document.getElementById(game_id + 'f-down').style.display = "block";
    }
  }
}

var ajax_like_request = function(e){
  e.preventDefault();
  $.post("like/",
  {
      id: $(this).data('id'),
      action: $(this).data('action')
  },
  ajax_like_handler

  );
}

var ajax_dislike_request = function(e){
  e.preventDefault();
  $.post("like/",
  {
      id: $(this).data('id'),
      action: $(this).data('action')
  },
  ajax_dislike_handler

  );
}

$(document).ready(function(){
    $('a.like').click(ajax_like_request);
    $('a.dislike').click(ajax_dislike_request);
})


