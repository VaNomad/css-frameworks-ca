import {
  API_SOCIAL_URL
} from "../../constants.js";

import {
  registerURL
} from "./registerCall.js";


async function loginUser(registerURL, profile) {
  try {
    const body = JSON.stringify(profile);
    console.log(body);


    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json"
      },
      method,
      body
    })
    console.log(response);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
    
  }
}
loginUser(loginUrl, profile);