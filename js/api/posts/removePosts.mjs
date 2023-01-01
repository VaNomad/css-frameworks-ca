import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const method = "delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("You will need an ID to delete it!")
  }

  const removePostsURL = `${API_SOCIAL_URL}/posts/${id}`;
  
  const response = await authFetch(removePostsURL, {
    method
  })

  return await response.json();
}