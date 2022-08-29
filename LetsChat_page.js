var firebaseConfig = {
    apiKey: "AIzaSyDhCMCP4XVtyZYNMfs3olzqhrFEVya8vtw",
    authDomain: "project-101-45ad9.firebaseapp.com",
    databaseURL: "https://project-101-45ad9-default-rtdb.firebaseio.com",
    projectId: "project-101-45ad9",
    storageBucket: "project-101-45ad9.appspot.com",
    messagingSenderId: "695772828776",
    appId: "1:695772828776:web:2140a47018d14c947797dd"
  };

firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

  function send()
  {
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
});
  }

  function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
  }
  