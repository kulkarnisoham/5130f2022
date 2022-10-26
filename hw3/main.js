var firebaseConfig = {
    apiKey: "AIzaSyBKiNea2Tm6_HM7X9TAOws-dj8JV76iYDE",
    authDomain: "userdata-37dc1.firebaseapp.com",
    databaseURL: "https://userdata-37dc1-default-rtdb.firebaseio.com",
    projectId: "userdata-37dc1",
    storageBucket: "userdata-37dc1.appspot.com",
    messagingSenderId: "174102010616",
    appId: "1:174102010616:web:45fcfcaa3d9116f965390d",
    measurementId: "G-X3BXY6Z63V"
  };

firebase.initializeApp(firebaseConfig);

var msgRef = firebase.database().ref('messages');

document.getElementById('userdata').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstname = getInputValues('firstname');
    var lastname = getInputValues('lastname');
    var studentemail = getInputValues('studentemail');
    var studentid = getInputValues('studentid');
    var userlocation = getInputValues('userlocation');
    
    saveMessage(firstname,lastname,studentemail,studentid,userlocation);
    console.log(123);
}

function getInputValues(id){
    return document.getElementById(id).value;
}

function saveMessage(firstname,lastname,studentemail,studentid,userlocation){
    var newMsgRef = msgRef.push();
    newMsgRef.set({
        firstname: firstname,
        lastname: lastname,
        studentemail: studentemail,
        studentid: studentid,
        userlocation: userlocation
    });
}


function getData() {
document.getElementById('showusers').addEventListener('onclick', msgRef.on("value",function(snapshot){
    snapshot.forEach(function(data){
        console.log(data.val());       
    });
}));
}
