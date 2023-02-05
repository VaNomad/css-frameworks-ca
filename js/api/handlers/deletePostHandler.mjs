import { removePost } from "../posts/removePosts.mjs";


export function deletePost(btn, id) {
  btn.addEventListener("click", () => {
    removePost(id);
    if (removePost) {
      setTimeout(() => {
        window.location = "/posts.html";
      }, 500);
    } else {
      alert('The Post was not deleted');
    }
  });
};