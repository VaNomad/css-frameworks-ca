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

  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });

  console.log(response);
  

  // if (response.ok) {
  //   return await response.json();
  // }


  const error = await response.json();
  console.log(error);
  
  const errorMessage = error.errors[0].message;
  console.log("error", error);

  throw new Error(errorMessage);

}



