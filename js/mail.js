function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "help.sdgcloudserver@gmail.com",
        Password : "gyqwciqkasvvhdcc",
        To : 'sdgcloudserver@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Message From Sdg Cloud Server's User",
        Body : "Name: "+document.getElementById("name").value+"<br> Phone No: "+document.getElementById("mobile").value+"<br> Email: "+document.getElementById("email").value+"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Your Message Has Been Sent Successfully!")
    );
}