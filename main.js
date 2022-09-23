const submitButton = document.querySelector("form .bottom-div button");
const firstNameInput = document.querySelector("form .field #first-name");
const lastNameInput = document.querySelector("form .field #last-name");
const emailInput = document.querySelector("form .field #email");
const numberInput = document.querySelector("form .field #number");
const passwordInput = document.querySelector("form .field #password");
const conPasswordInput = document.querySelector("form .field #con-password");

submitButton.addEventListener("click", (e) => {
	
	e.preventDefault();
	
	// First name
	if (firstNameInput.validity.valueMissing) {
		makeInvalid(firstNameInput, "this field is required");
	} else {
		makeValid(firstNameInput);
	}
	
	// Last name
	if (lastNameInput.validity.valueMissing) {
		makeInvalid(lastNameInput, "this field is required");
	} else {
		makeValid(lastNameInput);
	}
	
	// Email
	if (emailInput.validity.valueMissing) {
		makeInvalid(emailInput, "this field is required");
	} else if (emailInput.validity.typeMismatch) {
		makeInvalid(emailInput, "the email is invalid");
	} else {
		makeValid(emailInput);
	}
	
	// Phone number
	if (numberInput.validity.valueMissing) {
		makeInvalid(numberInput, "this field is required");
	} else if (numberInput.validity.patternMismatch) {
		makeInvalid(numberInput, "please enter a valid Bangladeshi number")
	} else {
		numberInput.parentElement.classList.remove("invalid");
		numberInput.nextElementSibling.childNodes[0].textContent = "";
	}
	
	// Password and confirm password
	if (passwordInput.validity.tooShort || passwordInput.validity.valueMissing ||
		conPasswordInput.validity.tooShort || conPasswordInput.validity.valueMissing) {
			
			if (passwordInput.validity.tooShort || passwordInput.validity.valueMissing) {
				makeInvalid(passwordInput, "password should be atleast 6 characters long");
			} 
			if (conPasswordInput.validity.tooShort || conPasswordInput.validity.valueMissing) {
				makeInvalid(conPasswordInput, "password should be atleast 6 characters long");
			}
	} 
	else if (passwordInput.value !== conPasswordInput.value) {
		
		
		makeInvalid(passwordInput, "passwords don't match");
		makeInvalid(conPasswordInput, "passwords don't match");
		
		if (passwordInput.validity.tooShort || passwordInput.validity.valueMissing) {
			makeInvalid(passwordInput, "password should be atleast 6 characters long");
		} 
		if (conPasswordInput.validity.tooShort || conPasswordInput.validity.valueMissing) {
			makeInvalid(conPasswordInput, "password should be atleast 6 characters long");
		}
	}
	else {
			makeValid(passwordInput);
			makeValid(conPasswordInput);
	}
});

function makeInvalid (inputField, invalidText) {
	inputField.parentElement.classList.add("invalid");
	inputField.nextElementSibling.childNodes[0].textContent = "* " + invalidText;
};

function makeValid (inputField) {
	inputField.parentElement.classList.remove("invalid");
	inputField.nextElementSibling.childNodes[0].textContent = "";
};