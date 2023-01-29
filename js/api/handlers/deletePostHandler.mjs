import { removePost } from "../posts/removePosts.mjs";

export function deletePost(btn, id) {
  btn.addEventListener("click", () => {
    console.log(id);
    removePost();
  })
}