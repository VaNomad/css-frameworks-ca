import { API_SOCIAL_URL } from "../../constants.mjs";

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
    method: method,
    body: body,
  });

  const result = await response.json();

  if (response.ok) {
    return result
  }

  const error = result

  const errorMessage = error.errors[0].message;

  throw new Error(errorMessage);

}