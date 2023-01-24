// import {
//   API_SOCIAL_URL
// } from "../../constants.mjs"

// const url = `${API_SOCIAL_URL}/posts`;



import { API_SOCIAL_URL } from "../../constants.mjs";

import { authFetch } from "../authFetch.mjs";

export async function getPosts() {

  const getPostsURL = `${API_SOCIAL_URL}/posts?_author=true`;
  
  const response = await authFetch(getPostsURL)

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("You will need an ID to get the post!")
  }

  const getPostURL = `${API_SOCIAL_URL}/posts/${id}`;
  
  const response = await authFetch(getPostURL)

  return await response.json();
}

export async function getProfilePosts() {
  // if (!profile.name) {
  //   throw new Error("You will need an ID to get the post!")
  // }

  const getProfilePostsURL = `${API_SOCIAL_URL}/profiles/${profile.name}/posts`;
  
  const response = await authFetch(getProfilePostsURL)

  return await response.json();
}
