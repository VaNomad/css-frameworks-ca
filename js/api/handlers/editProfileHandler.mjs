import { load } from "../../storage/storage.mjs";
import { displayError } from "../../ui/displayError.mjs";
import { editProfile, getProfile } from "../profile/profileBarrel.mjs";


export async function editProfileListener() {
  const editProfileForm = document.querySelector("#editProfile");
  const regMsg = document.querySelector("#regMsg");

  const { name, email } = load("profile");
  editProfileForm.name.value = name;
  editProfileForm.email.value = email;
 
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

    setTimeout(() => {
      regMsg.style.display = "none";
    }, 7000);
    // form.reset();
    if (editProfileForm.avatar.value || editProfileForm.banner.value) {
        regMsg.innerHTML = `
                                  <div class="card border-success mx-auto" style="min-width: 50rem;">
                                  <div class="card-header text-info">Success!</div>
                                  <div class="card-body">
                                    <h5 class="card-title lead">Your profile has been updated!</h5>
                                  </div>`
                                  form.reset();
                            
                                  
      
    } else {
      displayError(editProfileForm, error);
    }

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