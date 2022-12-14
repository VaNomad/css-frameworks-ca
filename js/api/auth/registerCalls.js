import { API_SOCIAL_URL } from "../../constants.js";

const method = "post";

export async function register(profile) {
  try {
  // const registerURL = API_SOCIAL_URL + action;
  const registerURL = `${API_SOCIAL_URL}/auth/register`;
  const body = JSON.stringify(profile);
  console.log(registerURL);

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

