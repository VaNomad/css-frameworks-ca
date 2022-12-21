import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const method = "put";

export async function updatePost(postData) {
  const updatePostsURL = `${API_SOCIAL_URL}/posts/${postData.id}`;
  const response = await authFetch(updatePostsURL, {
    method,
    body: JSON.stringify(postData)
  })

  // const result = await response.json();
  // console.log(result);
  return await response.json();
}