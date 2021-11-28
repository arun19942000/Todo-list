var username = document.getElementById("Username");
var password = document.getElementById("Password");
let username1 = "admin";
let password1 = "12345";
var re_direct;


function validate(user_name, pass_word,redirect) {


    var username2 = user_name.value;
    var password2 = pass_word.value;
    

    if (username2 === username1 && password2 == password1) {
         re_direct=1;
        

    }
    else {
         re_direct=0;
        
    }
    redirect();




}
function redirect(){
    if(re_direct==1){
        var form=document.getElementById("form");
        form.action="./index.html"
      
        
    
        

        
    }
}

