function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
    result.setAttribute("class","alert alert-danger text-center");

    if(user=="" && email=="" && password=="" && confirm==""){
        result.innerHTML ="Enter Data In Form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.innerHTML ="enter 5-15 characters Name"
        return false;
    }else if(email.indexOf("@")==-1 || email.indexOf(".com")==-1){
        result.innerHTML ="Enter Valid Email";
        return false;
    }else if (password.length<8){
        result.innerHTML ="Week password";
        return false;
    }else if (password != confirm){
        result.innerHTML ="Match password ";
        return false;
    }
}