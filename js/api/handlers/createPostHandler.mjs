import { createPost } from "../posts/createPosts.mjs";
import { displayError } from "../../ui/displayError.mjs";

export function createPostListener() {
  const createPostForm = document.querySelector("#createPost");

  createPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    try {
      const response = await createPost(post);
      console.log(response);
      
      if (response.ok) {
        window.location.replace("/posts.html");
        return response
      }
    } catch (error) {
      displayError(createPostForm, error);
    }

  });
};