import {
  API_SOCIAL_URL
} from "../../constants.mjs";

export const registerURL = `${API_SOCIAL_URL}/auth/register`;

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

  const result = await response.json();
  console.log(result);


  if (response.ok) {
    return await response.json();
  }

  const error = await response.json();
  console.log(error);



  const errorMessage = error.errors[0].message;
  console.log("error", error);

  throw new Error(errorMessage);

}