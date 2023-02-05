import * as handlers from "./api/handlers/handlersBarrel.mjs";
import * as posts from "./api/posts/postBarrel.mjs"
// import { renderPostTemplate } from "./api/posts/postBarrel.mjs";

export async function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      console.log("home page");
      const renderPost = await posts.getPosts();
      const postContainer = document.querySelector("#specificPosts");
      posts.renderPostTemplates(renderPost, postContainer);
      handlers.createPostListener();
      handlers.viewAllPosts();
      return;
    case "/register.html":
      console.log("register");
      handlers.registerFormListener();
      handlers.viewAllPosts();
      return;
    case "/login.html":
      console.log("login");
      handlers.loginFormListener();
      handlers.getTokenListener();
      return;
    case "/createPost.html":
      console.log("createPost");
      handlers.createPostListener();
      return;
    case "/editpost.html":
      console.log("editPost");
      handlers.editPostListener();
      return;
    case "/profile.html":
      console.log("editProfilePost");
      const renderProfilePosts = await posts.getProfilePosts();
      const profilePostContainers = document.querySelector("#profilePosts");
      posts.renderPostTemplates(renderProfilePosts, profilePostContainers);
      handlers.editPostListener();
      handlers.createPostListener();
      posts.editLicence();
      return;
    case "/editProfile.html":
      console.log("editProfile");
      handlers.editProfileListener();
      return;
    case "/posts.html":
      console.log("getPosts");
      const renderPosts = await posts.getPosts();
      const postContainers = document.querySelector("#posts");
      posts.renderPostTemplates(renderPosts, postContainers);
      handlers.viewAllPosts();
      handlers.createPostListener();
      posts.editLicence();
      return;
    case "/post.html":
      posts.getPosts();
      handlers.viewPost();
      // posts.removePost();
      posts.editLicence();
      return;
    case "/editPost.html":
      handlers.deletePost();
      return;
  }
}

// posts.getPosts();