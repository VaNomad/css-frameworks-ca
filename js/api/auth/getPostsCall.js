import {
  API_SOCIAL_URL
} from "../../constants.js";

const postURL = `${API_SOCIAL_URL}/posts`;

const method = "GET";

export async function getPosts(postURL) {
  try {
    console.log(postURL);
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const getOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      method,
    };
    const response = await fetch(postURL, getOptions);
    console.log(response);
    
    const json = await response.json();
    console.log(json);


  } catch (error) {
    console.log(error);

  }
}

