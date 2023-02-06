import { registerNewUser } from "../auth/registerCall.mjs";
import { displayError } from "../../ui/displayError.mjs";

export async function registerFormListener() {
  const registryForm = document.querySelector("#registerForm");
    const regMsg = document.querySelector("#regMsg");

  if (registryForm) {
    registryForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const registryForm = event.target;
      const formData = new FormData(registryForm);
      const profile = Object.fromEntries(formData.entries());
      
      try {
        const result = await registerNewUser(profile)
        
        if(result.id) {
          regMsg.innerHTML = `
                                                   <div class="card border-success mx-auto" style="min-width: 50rem;">
                                                   <div class="card-header text-info">Success!</div>
                                                   <div class="card-body">
                                                     <h5 class="card-title lead">Your account is registered!</h5>
                                                     <p class="card-title">Head on over to the login page to enter Demo Tape.</p>
                                                  </div>`
          
                                              
          setTimeout(() => window.location = "/login.html", 4500);
        }            
        return result;
      } catch (error) {
        displayError(registryForm, error);
      }
    });
  }
}



