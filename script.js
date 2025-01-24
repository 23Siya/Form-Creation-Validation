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
      if (username.value) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return;
      } else {
        usernameError.textContent = '';
      }

      // Validate email
      
      const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } else {
        emailError.textContent = '';
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