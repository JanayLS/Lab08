    // JavaScript code for form validation
	// Prevent form from submitting


// Retrieve the input field value
let userinput = document.getElementById('inputField');
// Regular expression pattern for alphanumeric input
let regex = /^[a-zA-Z0-9]+$/
// Check if the input value matches the pattern
// Valid input: display confirmation and submit the form
userinput.addEventListener('blur', function(){
if(!regex.test(userinput.value)){
  window.alert('Alphanumeric values only!');
  event.preventDefault()
}
// Invalid input: display error message
else{
  window.alert('Submitted.')
    }
})


