import { loginUser } from "../auth/loginCall.js";

export function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const login = Object.fromEntries(formData.entries());
      console.log(login);

      loginUser(login);
  });
};