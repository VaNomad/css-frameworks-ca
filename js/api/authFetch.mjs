import { load } from "../../storage/storage.mjs";

export async function headers() {
  const token = load("token");

  return {
    "content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
}

export async function authFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers()
  })
}