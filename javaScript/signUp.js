
    var firstNameErr = lastNameErr = emailErr = passwordErr = phoneErr = countryErr = acceptionErr = true;

    var fName = document.querySelector('.row .firstName')
    var lName = document.querySelector('.row .lastName')
    var email = document.querySelector('.row .email')
    var password = document.querySelector('.row .password')
    var phone = document.querySelector('.row .phoneNumber')
    var country = document.querySelector('.row .country')
    var gender = document.getElementsByName('gender')
    var checkBox = document.getElementById('policies')


    var firebaseConfig = {
        apiKey: "AIzaSyA0gRMGJf-A52U8g8eBWto9_LX7FSnXXh4",
        authDomain: "pwi-login-auth.firebaseapp.com",
        databaseURL: "https://pwi-login-auth.firebaseio.com",
        projectId: "pwi-login-auth",
        storageBucket: "pwi-login-auth.appspot.com",
        messagingSenderId: "316626615751",
        appId: "1:316626615751:web:95a18bd025c089d2362de2",
        measurementId: "G-KPP1SHCZJ2"
      };
    
    // Initialize Firebase
    var firebaseApp = firebase.initializeApp(firebaseConfig);

    console.log(firebaseApp.name)



    function handleSignUp() {

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
         var regEx = /(?=.*[0-9])|(?=.*[A-Z])/;
         if (regEx.test(password.value) === false) {
             error('passwordErr', 'At least 1 uppercase alphabetical character and number!');
             console.log(password.value, regEx.test(password.value))
         }
         else{
             error('passwordErr', '');
             emailErr = false;
         }
     }

        //prevent The form from submiting if there are any errors
    if ((firstNameErr || lastNameErr || emailErr || passwordErr || phoneErr || countryErr || genderErr || acceptionErr) === true) {
        return false;
    }  




        // Create user with email and pass.
        // [START createwithemail]
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END createwithemail]


    }

    function sendEmailVerification() {
        // [START sendemailverification]
        firebase.auth().currentUser.sendEmailVerification().then(function() {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Email Verification Sent!');
          // [END_EXCLUDE]
        });
        // [END sendemailverification]
    }




    function mySubmitFunction(e) {
        e.preventDefault();
        return false;
      }

function error(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}


document.querySelector('.submit').addEventListener('click', handleSignUp())


// function showData(){

//     var data = `--Data preview--\n
//     Name: ${fName.value} \n
//     surname: ${lName.value}\n
//     email: ${email.value}\n
//     pass: ${password.value}\n
//     country: ${country.value}\n`      
//     alert(data);

// }
