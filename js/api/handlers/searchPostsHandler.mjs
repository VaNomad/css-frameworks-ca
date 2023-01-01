import * as postMethods from "../posts/getPostsCall.mjs"
import { renderPostTemplates } from "../posts/postTemplate.mjs";

const searchBar = document.querySelector("#searchBar")

export async function viewAllPosts() {
  searchBar.addEventListener("input", (event) => {
    event.preventDefault();
    const value = event.target.value.toLowerCase()
    let filteredPosts = posts.filter(function(post) {
        
      return (
        post.body.toLowerCase().includes(value) ||
        post.title.toLowerCase().includes(value)
      )
    })

    const postContainer = document.querySelector("#posts")
    postContainer.replaceChildren()
    renderPostTemplates(filteredPosts, postContainer)
    
});

    let posts = await postMethods.getPosts();
    const postContainer = document.querySelector("#posts")
    renderPostTemplates(posts, postContainer)
}