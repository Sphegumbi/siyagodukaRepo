function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_bijnt2t","template_ec3pnxq",parms).then(alert("Email sent successfully!!"));
    
}