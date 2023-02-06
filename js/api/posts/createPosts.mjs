import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const createPostsURL = `${API_SOCIAL_URL}/posts`;
const method = "post";

export async function createPost(postData) {

  const response = await authFetch(createPostsURL, {
    method,
    body: JSON.stringify(postData)
  })

  return await response.json();
}