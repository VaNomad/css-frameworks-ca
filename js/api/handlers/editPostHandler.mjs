import { editPost } from "../posts/createPosts.mjs";
import { displayError } from "../../ui/displayError.mjs";

export function editPostListener() {
  const editPostForm = document.querySelector("#editPost");

  editPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const edit = Object.fromEntries(formData.entries());
    // loginUser(login);

    try {
      const response = await editPost(edit);
      console.log(response);
      
      if (response.ok) {
        window.location.replace("/posts.html");
        return response
      }
    } catch (error) {
      displayError(editPostForm, error);
    }

  });
};