import { getToken } from "../auth/getTokenCall.js";

export function getTokenListener() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const getTheToken = Object.fromEntries(formData.entries());
      console.log(getTheToken);

      getToken(getTheToken);
  });
};