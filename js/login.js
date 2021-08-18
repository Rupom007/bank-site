// Login form

document.getElementById('login-button').addEventListener('click', function(){
    // Get Email 
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value;

    // Get Password
    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;

    if(userEmail == 'hagu@korsi.com' && userPassword == 'nunu404'){
        window.location.href = 'bank.html';
    }else{
        alert('kamlachoda email password abar check korr');
    }
})