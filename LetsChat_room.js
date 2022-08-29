
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

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("contact Name - " + contact_names);
   row = "<div class='contact_name' id="+Room_names+" onclick='redirectTocontactName(this.id)' >#"+ contact_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});
}
console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;

        row = "<div class = 'room name' id="+Contact_names+" onlclick='redirectToContactName(this.id)'>#"+Contact_names+"</div><hr>";
        
function addcontact()
    {
      room_name = document.getElementById("contact_name").value;
      document.getElementById("contact_name").innerHTML = "Contact: " + contact_name + "!";
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding contact name"
      });
	  localStorage.setItem("contact_name", room_name);
        
      window.location = "letsChat_room.html";
  }

  function redirectToContactName(name)
    {
      console.log(name);
      localStorage.setItem("contact_name", name);
        window.location = "LetsChat_page.html";
    }

  