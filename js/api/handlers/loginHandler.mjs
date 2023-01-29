import { loginUser } from "../auth/loginCall.mjs";
import { displayError } from "../../ui/displayError.mjs";

export function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");
  const regMsg = document.querySelector("#regMsg");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const login = Object.fromEntries(formData.entries());

    try {
      const response = await loginUser(login);
      console.log(response);
      
      if (response.ok) {
        window.location.replace("/profile.html");
        return response
      } else {
        regMsg.innerHTML = `
                                      <div class="card border-danger mx-auto" style="min-width: 50rem;">
                                      <div class="card-header text-danger">No Entry!</div>
                                      <div class="card-body">
                                        <h5 class="card-title lead">Your account is not registered</h5>
                                        <p class="card-title">Click "Create New Account" button to register</p>
                                      </div>`
                                      form.reset();
                                      
                                      setTimeout(() => {
                                          window.location = "/login.html";
                                        }, 3500);
                                      
          
        
      }
    } catch (error) {
      displayError(loginForm, error);
    }

  });
};

export async function getTokenListener() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const getToken = Object.fromEntries(formData.entries());
    console.log(getToken);
    
  });
};