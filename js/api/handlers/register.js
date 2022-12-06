
// import { API_BASE_URL } from "./constants.mjs";

import { register } from "../auth/registerCalls.js";

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



 export function setRegistryFormListener() {
    const registryForm = document.querySelector("#registerForm");

    registryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);
        const action = form.action;
        const method = form.method;

        //send to API
        register(profile, action, method);
    });
};





