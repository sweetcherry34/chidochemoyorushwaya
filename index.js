$(document).ready(function(){

$('#menu').click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});

$(window).on('scroll load',function(){

$('#menu').removeClass('fa-times');
$('header').removeClass('toggle');

});

});

//smooth scrolling
$('a[href*="#"]').on('click',function(e){
   
        e.preventDefault();
        $('html, body').animate({

scrollTop: $($(this).attr(' href')).offset( ).top, 

        },
        500,
         'linear'
        );
         
});

function sendEmail(){
        Email.send({
                    Host : "smtp.gmail.com",
                    Username : "chidochemoyorushwaya@gmail.com",
                    Password : "king3ston3",
                    To : 'chidochemoyorushwaya@gmail.com',
                    From : document.getElementById("email").value ,
                    Subject : "New Contact Form Enquiry",
                    Body : "Name" + document.getElementById("name").value 
                            + "<br> Email: " + document.getElementById("email").value 
                            + "<br> Project: " + document.getElementById("project").value 
                            + "<br> Message: " + document.getElementById("message ").value 
                }).then( 
                message => alert(" Message Sent Succesfully") 
                );
    }
