import {
  API_SOCIAL_URL
} from "../../constants.js";

const loginURL = `${API_SOCIAL_URL}/auth/login`;

const method = "POST";

export async function loginUser(login) {
  try {
    const body = JSON.stringify(login);

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json"
      },
      method,
      body
    });

    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return response

  } catch (error) {
    console.log("The User name or password in incorrect");
  }
}

