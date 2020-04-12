
    var firstNameErr = lastNameErr = emailErr = passwordErr = phoneErr = countryErr = acceptionErr = true;

    var fName = document.querySelector('.row .firstName')
    var lName = document.querySelector('.row .lastName')
    var email = document.querySelector('.row .email')
    var pass = document.querySelector('.row .password')
    var phone = document.querySelector('.row .phoneNumber')
    var country = document.querySelector('.row .country')
    var gender = document.getElementsByName('gender')
    var checkBox = document.getElementById('policies')



function error(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validationForm (){


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

    //validate surname
    if (lName.value === '') {
        error('lastNameErr', 'Please enter your last name');
    }
    else{
        var regEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regEx.test(fName.value) === false) {
            error('lastNameErr', 'Please enter valid last name')
        }
        else{
            error('lastNameErr', '');
            lastNameErr = false;
        }

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

    //verify password

    if (pass.value === '') {
        error('passwordErr', 'Please enter your password');
    }
    else{
        var regEx = /(?=.*[0-9])|(?=.*[A-Z])/;
        if (regEx.test(pass.value) === false) {
            error('passwordErr', 'At least 1 uppercase alphabetical character and number!');
            console.log(pass.value, regEx.test(pass.value))
        }
        else{
            error('passwordErr', '');
            emailErr = false;
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


 
    
    showData();

    //prevent The form from submiting if there are any errors
    if ((firstNameErr || lastNameErr || emailErr || passwordErr || phoneErr || countryErr || genderErr || acceptionErr) === true) {
        return false;
    }    
    
};

function showData(){

    var data = `--Data preview--\n
    Name: ${fName.value} \n
    surname: ${lName.value}\n
    email: ${email.value}\n
    pass: ${pass.value}\n
    country: ${country.value}\n`      
    alert(data);

}




// const submit = document.getElementsByClassName('submit')


// submit.addEventListener('click', validationForm());