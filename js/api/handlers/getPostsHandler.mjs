import {
  getPosts
} from "../posts/getPostsCall.mjs";

export function getTokenListener() {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const getToken = Object.fromEntries(formData.entries());
    console.log(getToken);

    getPosts();
  });
};