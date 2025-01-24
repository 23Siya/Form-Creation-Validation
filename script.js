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

        if (!email.include (!email.includes("@") || !email.includes("."))) {
          isValid=false;
          message.push ("email must have @ and . charecters  to be valid");
        }

   // Validate password
   if (password.value.length <8) {
    isValid=false;
    message.push ("password must be at least 8 characters long");
    
   }
   feedbackDiv.style.display="block";
   if(isValid){
    feedbackDiv.textContent="Registration Successful";
    feedbackDiv.style.color="#28a745";
   }
   else{
    feedbackDiv.innerHTML=message.join("<br>");
    feedbackDiv.style.color="#dc3545";
   }
    });
  
});