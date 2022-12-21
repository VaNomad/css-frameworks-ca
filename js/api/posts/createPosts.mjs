import {
  API_SOCIAL_URL
} from "../../constants.mjs";
import {
  authFetch
} from "../authFetch.mjs";

const createPostsURL = `${API_SOCIAL_URL}/posts`;
const method = "POST";

export async function createPost(postData) {

  const response = await authFetch(createPostsURL, {
    body: JSON.stringify(postData),
    method
  });
  const result = await response.json();
  console.log(result);

}