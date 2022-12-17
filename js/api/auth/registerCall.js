import {
  API_SOCIAL_URL
} from "../../constants.js";

export const registerURL = `${API_SOCIAL_URL}/auth/register`;
console.log(registerURL);

const method = "post";

/**
 * API call that registeres a new user
 * @param {string} registerURL
 * @param {FormData} profile 
 * ```js
 * registerNewUser(registerURL, profile)
 * ```
 */
export async function registerNewUser(profile) {
  try {

    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json"
      },
      method,
      body
    });
    

    const result = await response.json();
    console.log(result);

    if (result.id) {
      alert("Your account is registered");
    } else {
      alert(error);
    };

  } catch (error) {
    (error, "The register-account API call failed");
  }

  
}
