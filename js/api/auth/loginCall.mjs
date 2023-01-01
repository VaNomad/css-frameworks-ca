import { API_SOCIAL_URL } from "../../constants.mjs";
import * as storage from "../../storage/storage.mjs";

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

    const { accessToken, ...profile } = await response.json();
    

    storage.save("accessToken", accessToken);

    storage.save("profile", profile)

    return response
    

  } catch (error) {
    console.log("The User name or password in incorrect");
  }
}


