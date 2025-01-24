document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registration-form");
    const feedbackDiv= document.getElementById("form-feedback");
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
    let isValid=true;
    const message =[];

     // Validate username
     
      if (username.length <3) {
        isValid=false;
        message.push ("Username must be at least 3 characters long");
      }

      // Validate email

        if (!email.includes("@") || !email.includes(".")) {
          isValid=false;
          message.push ("email must have @ and . charecters  to be valid");
        }

   // Validate password
   if (password.length <8) {
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