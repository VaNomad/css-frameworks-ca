import * as postMethods from "../posts/getPostsCall.mjs"
import { renderPostTemplate } from "../posts/postTemplate.mjs";

export async function viewPost() {
    const params = new URLSearchParams(document.location.search)
    const id = params.get("id")

    const posts = await postMethods.getPost(id);
    const container = document.querySelector("#specificPost");
    renderPostTemplate(posts, container);
    console.log(posts)
    }