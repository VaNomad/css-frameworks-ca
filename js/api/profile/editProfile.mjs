import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../authFetch.mjs";


const method = "put";

export async function editProfile(profileData) {
  if (!profileData.name) {
    throw new Error("A name is required to update!")
  }

  const editProfileURL = `${API_SOCIAL_URL}/profiles/${profileData.name}/media`;
  const response = await authFetch(editProfileURL, {
    method,
    body: JSON.stringify(profileData)
  })

  // const result = await response.json();
  // console.log(result);
  return await response.json();
}