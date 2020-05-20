var btnSignUp = document.querySelector('#signUpId');
var btnSignIn = document.querySelector('#signInId');
var btnSettings = document.querySelector('#settingsId');
var btnAccpunt = document.querySelector('#accountId');



var btnLogin = document.querySelector(".login");
var btnForgotPass = document.querySelector(".forgotPassword");



var closeSpan = document.querySelectorAll('.close');

var modalSignUp = document.querySelector('.modal-sign-up');
var modalSignIn = document.querySelector('.modal-sign-in');



btnLogin.addEventListener('click', ()=>{
    modalSignIn.style.display = 'block';
    modalSignUp.style.display = "none";
})


btnSignUp.addEventListener('click', ()=>{
    modalSignUp.style.display = 'block';
});


btnSignIn.addEventListener('click', ()=>{
    modalSignIn.style.display = 'block';
})

closeSpan[0].addEventListener('click', ()=>{
    modalSignUp.style.display = "none";
});

closeSpan[1].addEventListener('click', ()=>{
    modalSignIn.style.display = "none";
});


window.onclick = function(event) {
    if (event.target == this.modalSignUp || event.target == this.modalSignIn) {
      this.modalSignUp.style.display = "none";
      this.modalSignIn.style.display = "none";
    }
}



function mySubmitFunction(e) {
    e.preventDefault();
    return false;
  }