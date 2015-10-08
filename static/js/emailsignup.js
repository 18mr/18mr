	// Checks if our email signup elements exist, once they do update them
	// - Cayden wanted to continue to use action network as their preferred email management tool
	// - Its important to leave the embed script as there are special keys generated on the fly
$(document).ready(function() {
	
	// Setup loop to check if elements exist
	window.signup_check = setInterval(check_trigger, 500);

	function check_trigger() {
		if ( $('#can_sidebar h4').length > 0 ){
			$('#can_sidebar h4').text('Join our email list');
			$('#can_sidebar #error_message').text('Please enter a valid email address.');
			$('#can_sidebar input[name^="commit"]').val('Go');
			$('#can_sidebar #form-zip_code').val('00000');
			$('#email-signup #can_thank_you').text('<h4>Thanks!</h4><p>You have successfully subscribed.</p>');
			check_clear(); // clear function
			
			// If user has already submitted email remove the submit button
			if ( $('#action_welcome_message_inner').length > 0 ) {
				$('#email-signup #can_sidebar input[type="submit"]').addClass('signed-in');
				$('#email-signup #can_sidebar input[type="submit"]').wrap('<div style="max-width:200px;margin:auto;"></div>');
				$('#email-signup #can_sidebar input[type="submit"]').val('Sign Up Now');
			}
			
		}
	}

	// Clear loop once elements are updated
	function check_clear() {
		clearInterval(window.signup_check);
	}

});