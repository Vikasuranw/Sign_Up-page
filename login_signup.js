
/* start sign up coding */
var signup_frm = document.getElementById("signup_frm");

signup_frm.onsubmit = function()
{
    var user =btoa( dcoument.getElementById("username").value);
    var email =btoa( dcoument.getElementById("email").value);
    var phone = btoa (dcoument.getElementById("phone").value);
    var pass =btoa (dcoument.getElementById("password").value);

    var user_object_data = {username:user,email:email,phone:phone,password:pass}
    var user_text_data = JSON.stringify(user_object_data);

    if(user != "" && email != "" && phone != "") 
    {
        localStorage.setItem(email,user_text_data);
        var signup_btn = document.getElementById("signup_btn");
        signup_btn.style.background = "#14b129";
        signup_btn.innerHTML = "<i class='fa fa-check-circle'  > </i>  Sign up Successful !";
        setTimeout(function(){
            signup_btn.style.background =  "linear-gradient(to right, #E100FF, #7F00FF)";
            signup_btn.innerHTML = "Sign up";
            signup_frm.reset();
        },3000);

        return false;
    } 
}
/* end sign up coding */


/* start email validation coding */

var email_input = document.getElementById("email")
email_input.onchange = function ()
{
    var email = btoa (document.getElementById("email").value);
    var warning = document.getElementById("email_notice");
    if(localStorage.getItem(btoa(email.value)) != null)
    {
        warning.style.display = "block"
        email_input.style.borderBottomColor = "red";
        signup_btn.disabled = true;
        signup_btn.style.background = "#ccc";

        email_input.onclick = function()
        {
            email_input.value = "";
            email_input.style.borderBottomColor = "#ccc";
            warning.style.display = "none";
            signup_btn.disabled = false;
            signup_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)";
        }
    }

}
/* end email validation coding */


/* start login coding */
var  login_frm = document.getElementById("login_frm");

login_frm.onsubmit = function()
{
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_war = document.getElementById("login ")

    if(localStorage.getItem(email.value) == null);
    {
       login_email_war.style.display = "block";
       email.style.borderBottomColor = "red";

       email.onclick = function()
       {
        email.value = "";
        login_email_war.style.display = "none";
        email.style.borderBottomColor = "#ccc";
       }
    }}
els
    {
    var text_data =  localStorage.getItem(btoa(email.value));
    var obj_data = JSON.parse(text_data);
   
    var correct_email = obj_data.email;
    var correct_password = obj_data.password;

    if(btoa(email.value) == correct_email)
    {
        if(btoa(password.value) == correct_password)
        {
            sessionStorage.setItem("user",btoa(email.value));
            window.location.replace("..Profile/profile.html");
        }
        else{
            
       login_password_war.style.display = "block";
       password.style.borderBottomColor = "red";

       password.onclick = function()
       {
        password.value = "";
        login_password_war.style.display = "none";
        password.style.borderBottomColor = "#ccc";
        }
    }
    }
}   
/* end login coding */
