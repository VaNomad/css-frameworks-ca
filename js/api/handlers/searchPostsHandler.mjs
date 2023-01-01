import * as postMethods from "../posts/getPostsCall.mjs"
import { renderPostTemplates } from "../posts/postTemplate.mjs";

const searchBar = document.querySelector("#search")

export async function viewAllPosts() {
searchBar.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase()
    let filteredPosts = posts.filter(function(post) {
        return post.body?.includes(value) || post.title.includes(value) || post.author.name.toLowerCase().includes(value)
    })

    const postContainer = document.querySelector("#posts")
    renderPostTemplates(filteredPosts, postContainer)
    
});

    let posts = await postMethods.getPosts();
    const postContainer = document.querySelector("#posts")
    renderPostTemplates(posts, postContainer)
}