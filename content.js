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
	if (passwordParam.length >= 10) score++;
	// check for lowercase letters
	if (/[a-z]/.test(passwordParam)) score++;
	// check for uppercase letters
	if (/[A-Z]/.test(passwordParam)) score++;
	// check for numbers
	if (/[0-9]/.test(passwordParam)) score++;
	// check for special characters
	if (/[!@#$%^&*(),.?":{}|<>\-_=+;'\/]/.test(passwordParam)) score++;

	if (score <= 2) return 'weak';
	else if (score <= 4) return 'medium';
	else return 'strong';
}
 
 
// strength pop up message
function passwordStrengthMessage(strength, passwordField)
{
	// remove any existing message box:
	let existingMessageBox = document.getElementById('password-strength-message');
	if (existingMessageBox) existingMessageBox.remove();

	// create new message box
	let messageBox = document.createElement('div'); 
	// assign an ID to the message:
	messageBox.id = 'password-strength-message';
	// so it appears where needed (not following normal document flow):
	messageBox.style.position = 'absolute';
	// adds space between border and text:
	messageBox.style.padding = '10px';
	// adds background color:
	messageBox.style.backgroundColor = '#f9f9f9';
	// styles the border:
	messageBox.style.border = '1px solid #ccc'
	// add space between pasword field and pop-up:
	messageBox.style.marginTop = '5px';
	// change border thickness:
	messageBox.style.borderRadius = '5px';

	// add feedback text:
	let feedbackText = document.createElement('p');
	// change text content (use backticks for literals):
	feedbackText.textContent = `Password Strength: ${strength}`;
	// change feedback color depending on strength:
	feedbackText.style.color = strength === 'strong' ? 'green' : 
	    strength === 'medium' ? 'orange' : 'red';
	
	// create a containter for the strength meter:
	let meterContainer = document.createElement('div')
	// change width of container:
	meterContainer.style.width = '100%'
	// change height of container:
	meterContainer.style.height = '10px';
	// change background color of meter:
	meterContainer.style.backgroundColor = '#e0e0e0';
	// change border thickness:
	meterContainer.style.borderRadius = '5px';

	// add meter fill:
	let meterFill = document.createElement('div');
	// change meter fill thickness:
	meterFill.style.borderRadius = '5px';
	// set width and color based on the password strength:
	if (strength === 'weak')
	{
		meterFill.style.width = '33%';
		meterFill.style.backgroundColor = 'red';
	}
	else if (strength === 'medium')
	{
		meterFill.style.width = '66%';
		meterFill.style.backgroundColor = 'orange';
	}
	else
	{
		meterFill.style.width = '100%';
		meterFill.style.backgroundColor = 'green';
	}

	// append the fillerd part to the container:
	meterContainer.appendChild(meterFill);

	// append feedback text and meter to the message box:
	messageBox.appendChild(feedbackText);
	messageBox.appendChild(meterContainer);

	// append the message box near the input field:
	passwordField.parentElement.appendChild(messageBox);
}