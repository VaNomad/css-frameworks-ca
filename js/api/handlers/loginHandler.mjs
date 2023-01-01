import { loginUser } from "../auth/loginCall.mjs";
import { displayError } from "../../ui/displayError.mjs";

export function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");

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