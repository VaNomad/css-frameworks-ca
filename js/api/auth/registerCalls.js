import { API_SOCIAL_URL } from "../../constants.js";

const registerURL = `${API_SOCIAL_URL}/auth/register`;
console.log(registerURL);

const method = "post";

export async function registerNewUser(profile) {
  try {

  const body = JSON.stringify(profile);
    
  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  })
  
  const result = await response.json();
  console.log(result);
    
  } catch (error) {
    console.log(error, "The API call failed");
  }
}
registerNewUser(registerURL);

