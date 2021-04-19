
document.getElementById("msg").value = "";


//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC4k1eYhQPtedtOHcQYKEb2tXoNH_rX3D8",
      authDomain: "kazs-co.firebaseapp.com",
      databaseURL: "https://kazs-co-default-rtdb.firebaseio.com",
      projectId: "kazs-co",
      storageBucket: "kazs-co.appspot.com",
      messagingSenderId: "687956206265",
      appId: "1:687956206265:web:721b4a24c2af0c2dad3168"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
      });
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id );


console.log(message_data);
name1 = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_width_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'> </h4>" ;
message_width_tag = "<h4 class='message_h4'>" + message + "</h4>";
likeButton = "<button class='btn btn-warning' id=''" + firebase_message_id + like +"onclick='updateLike(this.id)'";
SpanWidthTag = "span class = 'glyphicon gliphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
row = name_width_tag + message_width_tag + likeButton + SpanWidthTag;
document.getElementById(output).innerHTML = row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
console.log("Click On Like Button To Rate Your Friends" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) +1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
  like:updated_likes
});
}}
