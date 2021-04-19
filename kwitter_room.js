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
userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Welcome" + userName + "!";
function adddRoom()
{
  RoomName = document.getElementById("RoomName").value;
  firebase.database().ref("/").child(RoomName).update({
    purpose:"adding room name"
  });
  localStorage.setItem("RoomName", RoomName);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("RoomName", name);
  window.location = kwitter_page.html;
}
function logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("RoomName");
          window.location = "kwitter_room.html";
}
