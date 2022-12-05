
// import { API_BASE_URL } from "./constants.mjs";

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

const form = document.querySelector("#registerForm");

function registerForm() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(form);
        
        const form = event.target;
        
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);
        
    
        
    });
}


registerForm();

