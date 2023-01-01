import { API_SOCIAL_URL } from "../../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export async function getProfiles() {
  
  const getProfileURL = `${API_SOCIAL_URL}/profiles`;
  
  const response = await authFetch(getProfileURL)

  return await response.json();
}

export async function getProfile(name) {
  if (!name) {
    throw new Error("You will need an ID to get the profile!")
  }

  const getProfileURL = `${API_SOCIAL_URL}/profiles/${name}`;
  
  const response = await authFetch(getProfileURL)

  return await response.json();
}

