import { registerNewUser } from "../auth/registerCall.mjs";
import { displayError } from "../../ui/displayError.mjs";

 export async function registerFormListener() {
    const registryForm = document.querySelector("#registerForm");
    const regMsg = document.querySelector("#regMsg");

    registryForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);
        registerNewUser(profile);

        setTimeout(() => {
            regMsg.style.display = "none";
          }, 7000);
          // form.reset();
          if (registryForm.password.value && registryForm.name.value && registryForm.email.value) {
              regMsg.innerHTML = `
                                        <div class="card border-success mx-auto" style="min-width: 50rem;">
                                        <div class="card-header text-info">Success!</div>
                                        <div class="card-body">
                                          <h5 class="card-title lead">Your account is registered!</h5>
                                          <p class="card-title">Head on over to the login page to enter Demo Tape.</p>
                                        </div>`
                                        form.reset();
                                        
                                        setTimeout(() => {
                                            window.location = "/login.html";;
                                          }, 7500);
                                        
            
          } else {
            displayError(registryForm, error);
          }
        
    });
};





