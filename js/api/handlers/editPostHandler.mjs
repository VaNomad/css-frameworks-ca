import { editPost } from "../posts/editPost.mjs";
import { displayError } from "../../ui/displayError.mjs";
import { getPost } from "../posts/getPostsCall.mjs";

export async function editPostListener() {
  const editPostForm = document.querySelector("#editPost");

  const url = new URL(location.href);
  
  const id = url.searchParams.get("id");

  //code for pre-fill of editing a post
  const post = await getPost(id);

  const btn = document.querySelector("#editBtn");
  
  btn.disabled = true;

  editPostForm.title.value = post.title;
  editPostForm.body.value = post.body;
  editPostForm.tags.value = post.tags;
  editPostForm.media.value = post.media;

  btn.disabled = false;
  

  editPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const edit = Object.fromEntries(formData.entries());
    edit.id = id;
    
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