
// import { API_BASE_URL } from "./constants.mjs";

import { registerNewUser } from "../auth/registerCall.js";
import { displayError } from "../../ui/displayError.js";

// export async function register(url, profile, method) {
    
//     const response = await fetch(url, {
//         method: method,
//         headers: {
//             "Content-Type": "application/json",
//         },

//         body: JSON.stringify(profile),
//     });

//     const result = await response.json()

// }



 export function registerFormListener() {
    const registryForm = document.querySelector("#registerForm");

    registryForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);

        try {
            await registerNewUser(profile);
            if (profile.id.ok) {
                window.location = "/login.html"  
            } 
        } catch (error) {
            displayError(registryForm, error);
        }
        
    });
};





