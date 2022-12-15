import { registerFormListener } from "./api/handlers/registerHandler.js";
import { loginFormListener } from "./api/handlers/loginHandler.js";


export function router() {
  const path = window.location.pathname;
  console.log(path);
  
  switch (path) {
    case "/":
    case "/index.html":
      console.log("home page");
      return;
    case "/register.html":
      console.log("register");
      registerFormListener();
      return;
    case "/login.html":
      console.log("login");
      loginFormListener();
  }
}

