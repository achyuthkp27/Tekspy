function sendMail() {
  document.querySelector(".sent-message").classList.remove("d-block");
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contactNumber").value,
    company: document.getElementById("companyName").value,
    designation: document.getElementById("designation").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_o3oq5dj";
  const templateID = "template_7ajedxi";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("contactNumber").value = "";
      document.getElementById("companyName").value = "";
      document.getElementById("designation").value = "";
      document.querySelector(".sent-message").classList.add("d-block");
      console.log(res);
    })
    .catch((err) => console.log(err));
}
