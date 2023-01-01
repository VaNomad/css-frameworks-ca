import * as listeners from "./api/handlers/handlersBarrel.mjs";
import * as posts from "./api/posts/postBarrel.mjs"

export async function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      console.log("home page");
      return;
    case "/register.html":
      console.log("register");
      listeners.registerFormListener();
      return;
    case "/login.html":
      console.log("login");
      listeners.loginFormListener();
      listeners.getTokenListener();
      return;
    case "/createPost.html":
      console.log("createPost");
      listeners.createPostListener();
      return;
    case "/editPost.html":
      console.log("editPost");
      listeners.editPostListener();
      return;
    case "/editProfile.html":
      console.log("editProfile");
      listeners.editProfileListener();
      return;
    case "/posts.html":
      console.log("getPosts");
      const renderPosts = await posts.getPosts();
      const postContainers = document.querySelector("#posts");
      posts.renderPostTemplates(renderPosts, postContainers);
      listeners.viewAllPosts();
      return;
    case "/post.html":
      listeners.viewPost();
      return;
  }
}

posts.getPosts().then(console.log);