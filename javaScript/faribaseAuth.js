var fName = document.querySelector('.row .firstName')
var lName = document.querySelector('.row .lastName')
var email = document.querySelector('.row .email')
var password = document.querySelector('.row .password')
var country = document.querySelector('.row .country')
var checkBox = document.getElementById('policies')


var firstNameErr = lastNameErr = emailErr = passwordErr =  countryErr = acceptionErr = true;

//submit button very important
var btnSubmit = document.querySelector('.submit');

//forgot pass button
const forgotPass = document.querySelector('#reset-btn');

const logout = document.querySelector('#logoutId');
const account = document.querySelector('#accountId');
const messageInit = document.querySelector('.lucida-font');
const greetUser = document.querySelector('.greetUser');


const modalAccInfo = document.querySelector('.modal-account');
const accInfo = document.querySelector('.accountInfo')

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
    //validate last name
    if (lName.value === '') {
        error('lastNameErr', 'Please enter your name');
    }
    else{
        var regEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regEx.test(fName.value) === false) {
            error('lastNameErr', 'Please enter valid name')
        }
        else{
            error('lastNameErr', '');
            lastNameErr = false;
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
    if ((firstNameErr || emailErr || passwordErr  || countryErr  || acceptionErr || lastNameErr) === true) {
        return false;
    }  

}

const setupUi = (user, snapshot)=>{
    if (user) {
        greetUser.innerHTML = `Welcome, ${user.email}`
        //if user log in show other btns
        account.style.display = 'block';
        logout.style.display = 'block';
        messageInit.style.display = 'none';
        accInfo.style.display = 'block';
        btnSignUp.style.display = 'none';
        btnSignIn.style.display = 'none';

        db.collection('users').doc(user.uid).get().then(doc =>{
            var html =
            `<div>Logged in as:  ${user.email}</div>
            <div>Name: ${snapshot.data().name}</div>
            <div>Last Name: ${snapshot.data().surname}</div>
            
            <div>Country: ${snapshot.data().country}</div>
            `

            document.querySelector('.details').innerHTML = html;
        });       
        //show info about user in modal Account        
    }
    else{
        //remove greetings to user
        greetUser.innerHTML = ``
        account.style.display = 'none';
        logout.style.display = 'none';
        messageInit.style.display = 'block';
        messageInit.innerHTML = `Sign Up or Login to see account information`;
        accInfo.style.display = 'none';
        btnSignUp.style.display = 'block';
        btnSignIn.style.display = 'block';

        //hide info about account
    }
}

//update Values in Firestore
    const btnChangeN = document.querySelector('#changeNameBtn');
    const btnChangeLN = document.querySelector('#changeLastNameBtn');
    const btnCnangeCont = document.querySelector('#changeCountryBtn');
function changeData(user){

    btnChangeN.addEventListener('click', (e)=>{
        e.preventDefault()
        const newName = document.querySelector('#changeName').value;
        
        return db.collection('users').doc(user.uid).update({
            name: newName
        }).then(()=>{
    
        }).catch((errorFirebase)=>{
            alert(errorFirebase.code.message)
        });
    })

    btnChangeLN.addEventListener('click', (e)=>{
        e.preventDefault()
        const newLasName = document.querySelector('#changeLastName').value;
        
        return db.collection('users').doc(user.uid).update({
            surname: newLasName
        }).then(()=>{
    
        }).catch((errorFirebase)=>{
            alert(errorFirebase.code.message)
        });
    })

    btnCnangeCont.addEventListener('click', (e)=>{
        e.preventDefault()
        const newCountry = document.querySelector('#changeCountry').value;
        
        return db.collection('users').doc(user.uid).update({
            country: newCountry
        }).then(()=>{
    
        }).catch((errorFirebase)=>{
            alert(errorFirebase.code.message)
        });
    })
}

//listen for auth status
auth.onAuthStateChanged(function(user) {
    console.log(user)
    if (user) {

        db.collection('users').doc(user.uid).onSnapshot(snapshot =>{
            console.log('Current data:', snapshot.data())
            setupUi(user, snapshot);
        })
        //setupUi(user);
        //see object user
        console.log(`user loged in ${user}`)
        //Greet user
        changeData(user);
    }
    else{
        console.log(`user logged out ${user}`)
        
        setupUi(user);
    }

  });

btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    validator()

    const emailValue = email.value;
    const passValue = password.value;

    if ((firstNameErr || lastNameErr || emailErr || passwordErr || countryErr || acceptionErr) === false) {
        auth.createUserWithEmailAndPassword(emailValue, passValue).then(cred => {

            return db.collection('users').doc(cred.user.uid).set({
                name: fName.value,
                surname: lName.value,
                country: country.value,
            })

        }).then(()=>{

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

// resetPassword
forgotPass.addEventListener('click', e =>{
    e.preventDefault();

    var email = document.querySelector('.emailForgotPass').value;
    // [START sendpasswordemail]
    auth.sendPasswordResetEmail(email).then(function() {
      // Password Reset Email Sent!
      // [START_EXCLUDE]
      alert('Password Reset Email Sent!');
      // [END_EXCLUDE]
      modalForgotPass.style.display = "none";
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode == 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END sendpasswordemail]
})