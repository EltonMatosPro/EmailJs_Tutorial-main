function sendMail() {

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };


  const serviceID = "service_2dj5kdc";
  const templateID = "template_q9f1zec";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Sua mensagem foi enviada com sucesso!!")

    })
    .catch(err=>console.log(err));
  }

