import { removePost } from "../posts/removePosts.mjs";


export function deletePost(btn, id) {
  btn.addEventListener("click", () => {
    console.log(id);
    removePost(id);
    if (removePost) {
      setTimeout(() => {
        window.location = "/posts.html";
      }, 500);
    } else {
      console.log('The Post was not deleted');
    }
  });
};