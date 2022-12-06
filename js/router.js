import { setRegistryFormListener } from "./api/handlers/register.js";


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
      setRegistryFormListener();
      return;
      
      
  }
}

