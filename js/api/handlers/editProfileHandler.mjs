// import { editPost } from "../posts/editPost.mjs";
import { load } from "../../storage/storage.mjs";
import { displayError } from "../../ui/displayError.mjs";
// import { getPost } from "../posts/getPostsCall.mjs";

export async function editProfileListener() {
  const editProfileForm = document.querySelector("#editProfile");

  const url = new URL(location.href);

  const { name, email } = load("profile");
  
  // const id = url.searchParams.get("name");

  //code for pre-fill of editing a post
  const profile = await getProfile(name);

  const btn = document.querySelector("#editBtn");
  
  btn.disabled = true;

  editProfileForm.name.value = post.name;
  editProfileForm.email.value = post.email;
  // editPostForm.title.value = post.title;
  // editPostForm.body.value = post.body;
  // editPostForm.tags.value = post.tags;
  // editPostForm.media.value = post.media;

  btn.disabled = false;
  

  editPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    
    
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