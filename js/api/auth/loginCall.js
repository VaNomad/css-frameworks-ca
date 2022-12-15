import {
  API_SOCIAL_URL
} from "../../constants.js";

const loginURL = `${API_SOCIAL_URL}/auth/login`;
console.log(loginURL);

export async function loginUser(registerURL, login) {
  try {
    const body = JSON.stringify(login);

    console.log(body);
    
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(login),
    });
    console.log(response);

    const json = await response.json();
    console.log(json);

  } catch (error) {
    console.log("The API call failed");
    console.log(error);
    
  }
}
loginUser(loginURL);

//payload
