
// Reference messages collection

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
  let subject = getInputVal('subject');
  let message = getInputVal('message');

  // Save message
  saveMessage(name, email, subject, message);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';

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
      <li>subject: ${subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    <h5>Thanks,
All details have been saved to your database.</h5>
  `;


Email.send({
    SecureToken : "9cf4d588-b7f2-4f41-bcca-3ae844fbfa9a",
    To : 'ahmedragaba2015@gmail.com',
    From : "gatesolutions@mail.ru",
    Subject : "Tiny Programmers - Request",
    Body : output
}).then(
  message => console.log(message)
);

Email.send({
    SecureToken : "9cf4d588-b7f2-4f41-bcca-3ae844fbfa9a",
    To : 'hello@aquadic.com',
    From : "gatesolutions@mail.ru",
    Subject : "Tiny Programmers - Request",
    Body : output
}).then(
  message => console.log(message)
);
Email.send({
    SecureToken : "9cf4d588-b7f2-4f41-bcca-3ae844fbfa9a",
    To : 'thetinyprogrammers@gmail.com',
    From : "gatesolutions@mail.ru",
    Subject : "Tiny Programmers - Request",
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

