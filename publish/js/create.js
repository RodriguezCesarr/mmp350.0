const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');
const signUpButton = document.getElementById('sign-up-button');
const signUpMessage = document.getElementById('sign-up-message')
const signUpUserName = document.getElementById('sign-up-username');

signUpButton.onclick= function() {
	// username email and pass
	fb.create(signUpUserName.value, signUpEmail.value, signUpPassword.value);
};

signUpPassword.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		fb.create(signUpUserName.value, signUpEmail.value, signUpPassword.value);
	}
});

function onError(errorMessae){
	signUpMessage.textContent = errorMessae;
}
