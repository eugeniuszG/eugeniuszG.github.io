//navbar btn
var btnSignUp = document.querySelector('#signUpId');
var btnSignIn = document.querySelector('#signInId');
var btnAccount = document.querySelector('#accountId');


//link btn in forms
var btnLogin = document.querySelector(".login");
var btnForgotPass = document.querySelector(".forgotPassword");


//close span
var closeSpan = document.querySelectorAll('.close');

//modals
var modalSignUp = document.querySelector('.modal-sign-up');
var modalSignIn = document.querySelector('.modal-sign-in');
var modalAcc = document.querySelector('.modal-account');
var modalForgotPass = document.querySelector('.modal-resetPass');


btnForgotPass.addEventListener('click', ()=>{
    modalForgotPass.style.display = 'block';
    modalSignIn.style.display = 'none';
})

// btnAccount.addEventListener('click', ()=>{
//     modalAcc.style.display = 'block';
// })


btnLogin.addEventListener('click', ()=>{
    modalSignIn.style.display = 'block';
    modalSignUp.style.display = "none";
})


btnSignUp.addEventListener('click', ()=>{
    modalSignUp.style.display = 'block';
    modalSignIn.style.display = 'none';
});


btnSignIn.addEventListener('click', ()=>{
    modalSignIn.style.display = 'block';
    modalSignUp.style.display = 'none';
})

closeSpan[0].addEventListener('click', ()=>{
    modalSignUp.style.display = "none";
});

closeSpan[1].addEventListener('click', ()=>{
    modalSignIn.style.display = "none";
});

closeSpan[2].addEventListener('click', ()=>{
    modalAcc.style.display = "none";
});
closeSpan[3].addEventListener('click', ()=>{
    modalForgotPass.style.display = "none";
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