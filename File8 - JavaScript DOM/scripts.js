let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm-password');
let submit = document.getElementById('submit-btn');
let username = document.getElementById('username');
let success_message = document.getElementById('success-message');
let form = document.getElementById('form');
let error_message = document.getElementById('error-message');

submit.onclick = function(event)
{
    if(password.value !== confirm_password.value){
        event.preventDefault();
        confirm_password.setCustomValidity("Passwords Don't Match");
        setTimeout(() => {
            error_message.style.display = 'block';
            setTimeout(() => {
                error_message.style.display = 'none';
            }, 3000);
        }, 1000);
    } 
    else {
        if(username.value === '' || password.value === '' || confirm_password.value === ''){
            alert("please sign up");
        }
        else{
            event.preventDefault();
            confirm_password.setCustomValidity('');
            setTimeout(() => {
                success_message.style.display = 'block';
                password.value = '';
                confirm_password.value = '';
                username.value = '';
                setTimeout(() => {
                    success_message.style.display = 'none';
                }, 3000);
            }, 1000);

            let userData = {
                "username": username.value,
                "password": password.value,
            };

            localStorage.setItem('user', JSON.stringify(userData));

            window.location.href = 'login.html';
        }
    }        
}