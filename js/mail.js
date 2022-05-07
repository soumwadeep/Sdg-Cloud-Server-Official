function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "help.sdgcloudserver@gmail.com",
        Password : "sdgcloudserver",
        To : 'sdgcloudserver@gmail.com,soumwadeep@gmail.com',
        From : document.getElementById("email").value,
        // From : 'support@sdgcloudserver.com',
        Subject : "New Message From Sdg Cloud Server's User",
        Body : "Name: "+document.getElementById("name").value+"<br> Phone No: "+document.getElementById("mobile").value+"<br> Email: "+document.getElementById("email").value+"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Your Message Has Been Sent Successfully!")
    );
}