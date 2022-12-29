// import { editPost } from "../posts/editPost.mjs";
import { load } from "../../storage/storage.mjs";
import { displayError } from "../../ui/displayError.mjs";
import { editProfile, getProfile } from "../profile/profileBarrel.mjs";
// import { getPost } from "../posts/getPostsCall.mjs";

export async function editProfileListener() {
  const editProfileForm = document.querySelector("#editProfile");

  // const url = new URL(location.href);

  const { name, email } = load("profile");
  editProfileForm.name.value = name;
  editProfileForm.email.value = email;
  
  // const name = url.searchParams.get("name");

  //code for pre-fill of editing a profile
  const profile = await getProfile(name);

  const btn = document.querySelector("#editBtn");
  
  btn.disabled = true;

 
  editProfileForm.banner.value = profile.banner;
  editProfileForm.avatar.value = profile.avatar;
  
  btn.disabled = false;
  

  editProfileForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    profile.name = name;
    profile.email = email;
    
    

    try {
      const response = await editProfile(profile);
      console.log(response);
      
      if (response.ok) {
        window.location.replace("/profile.html");
        return response
      }
    } catch (error) {
      displayError(editProfileForm, error);
    }

  });
};