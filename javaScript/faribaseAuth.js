var fName = document.querySelector('.row .firstName')
var lName = document.querySelector('.row .lastName')
var email = document.querySelector('.row .email')
var password = document.querySelector('.row .password')
var country = document.querySelector('.row .country')
var checkBox = document.getElementById('policies')


var firstNameErr = emailErr = passwordErr =  countryErr = acceptionErr = true;

//submit button very important
var btnSubmit = document.querySelector('.submit');

const logout = document.querySelector('#logoutId');
const account = document.querySelector('#accountId');
const messageInit = document.querySelector('.lucida-font')




//display hint error
function error(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validator(){
    //validate name
    if (fName.value === '') {
        error('firstNameErr', 'Please enter your name');
    }
    else{
        var regEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regEx.test(fName.value) === false) {
            error('firstNameErr', 'Please enter valid name')
        }
        else{
            error('firstNameErr', '');
            firstNameErr = false;
        }
    }
    //verify country
    if (country.value === '--Select country--') {
        error('countryErr', 'Please choose country');
    }
    else{
        error('countryErr', '');
        countryErr = false;
    }
    //verfy check
    if (checkBox.checked === false) {
        error('acceptionErr', 'Please accept whatever I suggest');
    }
    else{
        error('acceptionErr', '');
        acceptionErr = false;
    }


    //validate email
     if (email.value === '') {
         error('emailErr', 'Please enter your e-mail');
     }
     else{
         var regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
         if (regEx.test(email.value) === false) {
             error('emailErr', 'Please enter valid e-mail')
         }
         else{
             error('emailErr', '');
             emailErr = false;
         }
      
     }

    //verify passwordword

     if (password.value === '') {
         error('passwordErr', 'Please enter your password');
     }
     else{
         var regEx = /^.{6,12}$/;
         if (regEx.test(password.value) === false) {
             error('passwordErr', 'Password should be at least 6 symbols!');
             console.log(password.value, regEx.test(password.value))
         }
         else{
             error('passwordErr', '');
             passwordErr = false;
         }
     }

        //prevent The form from submiting if there are any errors
    if ((firstNameErr || emailErr || passwordErr  || countryErr  || acceptionErr) === true) {
        return false;
    }  

}

//listen for auth status
auth.onAuthStateChanged(function(user) {
    console.log(user)


    if (user) {
        console.log(`user loged in ${user}`)
        //if user log in show other btns
        account.style.display = 'block';
        logout.style.display = 'block';
        messageInit.style.display = 'none';
    }
    else{
        console.log(`user logged out ${user}`)
        account.style.display = 'none';
        logout.style.display = 'none';
        messageInit.style.display = 'block';
    }

  });

btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    validator()

    const emailValue = email.value;
    const passValue = password.value;

    if ((firstNameErr || emailErr || passwordErr || countryErr || acceptionErr) === false) {
        auth.createUserWithEmailAndPassword(emailValue, passValue).then(cred => {

        }).catch(function(errorFire) {
            // Handle Errors here.
            var errorCode = errorFire.code;
            var errorMessage = errorFire.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/email-already-exists') {
                error('emailErr', errorMessage)
            }
            else{
                alert(errorMessage)
            } 
            console.log(error);
            // [END_EXCLUDE]
          });
        const modalSignUp = document.querySelector('.modal-sign-up');
        modalSignUp.style.display = "none";
        firstNameErr = emailErr = passwordErr =  countryErr = acceptionErr = true;
    }

});
  // [END authstatelistener]



// Sign out the user

logout.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
    })
})




//sign In the user
var login = document.querySelector('#login-btn');
login.addEventListener('click', e => {
    e.preventDefault();


    const emailLogin = document.querySelector('.emailLogin').value;
    const passwordLogin = document.querySelector('.passwordLogin').value;

    auth.signInWithEmailAndPassword(emailLogin, passwordLogin).then(cred =>{
        console.log(cred.user);

    }).catch(function(errorFirebase) {
        // Handle Errors here.
        var errorCode = ererrorFirebaseror.code;
        var errorMessage = errorFirebase.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }});
      const modalSignIn = document.querySelector('.modal-sign-in');
      modalSignIn.style.display = "none";
});





