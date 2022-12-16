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
export async function registerNewUser(registerURL, profile) {
  try {

    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json"
      },
      method,
      body
    })
    if (response.ok) {
      alert("Success! Your account is registered!")
    }
    

    const result = await response.json();
    console.log(result);

  } catch (error) {
    alert(error, "The register account API call failed");
  }
}
