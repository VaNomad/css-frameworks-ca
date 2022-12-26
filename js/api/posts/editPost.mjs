import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const method = "put";

export async function editPost(postData) {
  if (!postData.id) {
    throw new Error("You will need a post ID to update it!")
  }

  const editPostsURL = `${API_SOCIAL_URL}/posts/${postData.id}`;
  const response = await authFetch(editPostsURL, {
    method,
    body: JSON.stringify(postData)
  })

  // const result = await response.json();
  // console.log(result);
  return await response.json();
}