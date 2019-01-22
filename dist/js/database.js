
  var config = {
    apiKey: "AIzaSyD-4SSXSTKjB6fVcEvoYeIWzPPe4hHEflY",
    authDomain: "gate-solutions.firebaseapp.com",
    databaseURL: "https://gate-solutions.firebaseio.com",
    projectId: "gate-solutions",
    storageBucket: "gate-solutions.appspot.com",
    messagingSenderId: "718478692298"
  };
  firebase.initializeApp(config);



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
const contactForm=$("#contactForm");
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){

  e.preventDefault();
console.log("Submit for");
  // Get values
  let name = getInputVal('name');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  document.getElementById('contactForm').reset();

let output= `
    <p>You have a new request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name} </li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    <h5>Thanks,
All details have been saved to your database.</h5>
  `;
//let output="You have a new request \n"+"Contact Details \n"+"Name: "+name+"\n Email: "+email+"\n Phone: "+phone+" \nMessage: "+message ;

// Email.send("gatesolutions@mail.ru",
// "ahmedragaba2015@gmail.com",
// "Gate Solutions - Request",
// output,
// {token: "c91a200a-e8ad-4590-9a0f-d11e4c40c23c"});


Email.send({
    SecureToken : "9cf4d588-b7f2-4f41-bcca-3ae844fbfa9a",
    To : 'ahmedragaba2015@gmail.com',
    From : "gatesolutions@mail.ru",
    Subject : "Gate Solutions - Request",
    Body : output
}).then(
  message => console.log(message)
);

Email.send({
    SecureToken : "9cf4d588-b7f2-4f41-bcca-3ae844fbfa9a",
    To : 'a7medabdalazeem@gmail.com',
    From : "gatesolutions@mail.ru",
    Subject : "Gate Solutions - Request",
    Body : output
}).then(
  message => console.log(message)
);
 

}
//
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}
