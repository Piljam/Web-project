function validateData(){
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var agreement = document.getElementById("agreement");
    var subject = document.getElementById("subject").value;
    var country = document.getElementById("country").value;
    if(fullname.length < 5){
      alert("name length must be at least 5 char");
    }else if(!email.endsWith("@gmail.com")){
      alert("must be end with @gmail.com");
    }else if(country==""){
      alert("please select your country");
    }else if(subject.length <= 50){
      alert("must be 50 char");
    }else if(!agreement.checked){
      alert("must be checked");
    }else{
      window.location.href="contact.html";
      alert("your message has been submit")
    }
}