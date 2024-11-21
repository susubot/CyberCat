/* designed to interact directly with the webpages a user visits.
   it runs within the context of the web page itself, so it can
   access and manipulate the HTML elements of the page. [event
   listeners, modifying HTML/CSS/Javascript, etc. */
   
 let passwordField = document.querySelector('input[type="password"]');
 
 // if password field was found:
 if (passwordField)
 {
	 /* add event listener to the password field and
		detect weakness with feedback message */
	 passwordField.addEventListener('input', () =>
	 {
		 // store current password text:
		 let currentPassword = passwordField.value;
		 // store current strength using function:
		 let strength = checkPasswordStrength(currentPassword);
		 // strength pop-up:
		 passwordStrengthMessage(strength, passwordField);
	 });
 }
 
 // password strength function
 function checkPasswordStrength(passwordParam)
 {
	 let score = 0;
	 // check for minimum length:
	 if (passwordParam.length >= 6) score++;
	 // check for stronger length:
	 if (passwordParam.length >= 10)
	 // check for lowercase letters
	 if (/[a-z]/.test(passwordParam))
	 // check for uppercase letters
	 if (/[A-Z]/.test(passwordParam)) strength++;
	 // check for numbers
	 if (/[0-9]/.test(passwordParam))
	 // check for special characters
	 if (/[!@#$%^&*(),.?":{}|<>\-_=+;'\[\]\\]/.test(passwordParam))
	 
}
 
 
 // strength pop up message
 function passwordStrengthMessage(strength, passwordField)
 {
	let messageBox = document.createElement('div'); 
	// assign an ID to the message:
	messageBox.id = 'password-strength-message';
	// so it appears where needed:
	messageBox.style.position = 'absolute';
	// adds space between border and text:
	messageBox.style.padding = '10px';
	// adds background color:
	messageBox.style.backgroundColor = '#f9f9f9';
	messageBox.style.border = '1px solid #ccc'
	// add space between pasword field and pop-up:
	messageBox.style.marginTop = '5px';
	
	let feedbackText = document.createElement('p');
	feedbackText.style.margin = '0';
	feedbackText.textContent = 'Password strength: ${strength}';
	feedbackText.style.
	
	
	
	
 }