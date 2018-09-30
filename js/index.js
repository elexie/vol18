// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCzTDTZznqJKZ0LdFgaUdL44vprCM3WVt8",
  authDomain: "amberalert-88501.firebaseapp.com",
  databaseURL: "https://amberalert-88501.firebaseio.com",
  projectId: "amberalert-88501",
  storageBucket: "amberalert-88501.appspot.com",
  messagingSenderId: "24899568137"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('amberForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var color = getInputVal('color');
  var make = getInputVal('make');
  var model = getInputVal('model');
  var year = getInputVal('year');
  var license=getInputVal('license');
  // Save message
  saveMessage(color, make, model, year,license);

  // Show alert
	alert("Alert Uploaded to Server");
/*  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000); */

  // Clear form
  document.getElementById('amberForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(color, make, model, year){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    color: color,
    make:make,
    model:model,
    year:year,
	license:license,
  });
}