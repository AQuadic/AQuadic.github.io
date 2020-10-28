
    
function getInputVal(id){
    return document.getElementById(id).value;
}
; (function ($) {
    "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                name2: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 12
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, your name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                name2: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                subject: {
                    required: "please input your subject"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function (form) {
                
                let name = getInputVal('name');
                let email = getInputVal('email');
                let subject = getInputVal('subject');
                let message = getInputVal('message');

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
                <h5>Thanks</h5>
              `;

              Email.send({
                SecureToken : "d2698094-8a78-4583-8461-2893dc9d9b26",
                To : 'hello@aquadic.com',
                From : "website@aquadic.com",
                Subject : "Aquadic website - Request",
                Body : output
            }).then(
              message => console.log(message)
            );            

                $('#contactForm :input').attr('disabled', 'disabled');
                $('#contactForm').fadeTo( "slow", 1, function() {
                    $(this).find(':input').attr('disabled', 'disabled');
                    $(this).find('label').css('cursor','default');
                    $('#success').fadeIn()
                })
  document.getElementById('contactForm').reset();


             
                $('#contactForm').fadeTo( "slow", 1, function() {
                    $('#error').fadeIn()
                })


            }
        })
    })
        
})(jQuery)
