document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registration-form");
    const feedbackDiv= document.getElementById("form-feedback");
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').valuex.trim();
        const email = document.getElementById('email').valuex.trim();
        const password = document.getElementById('password').valuex.trim();
    let isValid=true;
    const message =[];

     // Validate username
     
      const usernameError = document.getElementById('usernameError');
      if (username.value.length <3) {
        isValid=false;
        message.push ("Username must be at least 3 characters long");
      }

      // Validate email

        if (!email.include ("@", ".")) {
          isValid=false;
          message.push ("email must have @ and . charecters  to be valid");
        }

   // Validate password
      if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }
      form.submit();
    });
    

  
});