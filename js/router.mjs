// import { registerFormListener } from "./api/handlers/registerHandler.mjs";
// import { loginFormListener } from "./api/handlers/loginHandler.mjs";
// import { getTokenListener } from "./api/handlers/getPostsHandler.mjs";
// import { createPostListener } from "./api/handlers/createPostHandler.mjs";
// // import { createPost } from "./api/posts/createPosts.mjs";
// import { updatePost } from "./api/posts/updatePosts.mjs"
// import { removePost } from "./api/posts/removePosts.mjs";

import * as listeners from "./api/handlers/handlersBarrel.mjs";
// import * as profiles from "./api/handlers/editProfileHandler.mjs";
import * as posts from "./api/posts/postBarrel.mjs"

// import { viewPost } from "./api/handlers/singlePost.mjs";

// import { renderPostTemplates } from "./api/posts/postTemplate.mjs";
// import { renderPostTemplate } from "./api/posts/postTemplate.mjs";




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
      return;
    case "/post.html":
      listeners.viewPost()
      return;
    

      
    // case "/posts.html":
    //   console.log("getPosts");
    //   posts.getPosts();
    //   return;
  }
}

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   // const post = posts.pop();
//   // const post = posts[1];
//   const container = document.querySelector("#posts");
//   // renderPostTemplate(post, container);
//   postMethods.renderPostTemplates(posts, container)
// }

// testTemplate();

// async function testTemplate() {
//     const posts = await posts.getPosts();
//     const post = posts.pop();
//     // const post = posts[1];
//     const container = document.querySelector("#getPosts");
//     // renderPostTemplate(post, container);
//     posts.renderPostTemplates(posts, container)
//   }
  
//   testTemplate();
posts.getPosts().then(console.log);