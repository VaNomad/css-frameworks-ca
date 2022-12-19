import {
  loginUser
} from "../auth/loginCall.js";
import { displayError } from "../../ui/displayError.js";

export function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const login = Object.fromEntries(formData.entries());
    loginUser(login);

    try {
      await loginUser(login);
      if (login.accesstoken.ok) {
        window.location = "/profile.html"
      }
    } catch (error) {
      displayError(loginForm, error);
    }

  });
};