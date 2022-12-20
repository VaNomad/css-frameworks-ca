import { registerFormListener } from "./api/handlers/registerHandler.js";
import { loginFormListener } from "./api/handlers/loginHandler.js";
import { getTokenListener } from "./api/handlers/getPostsHandler.js";
import { createPost } from "./api/posts/createPosts.js";
// import * as posts from "./api/posts/index.js";



export function router() {
  const path = window.location.pathname;
  
  switch (path) {
    case "/":
    case "/index.html":
      console.log("home page");
      return;
    case "/register.html":
      console.log("register");
      registerFormListener();
      return;
    case "/login.html":
      console.log("login");
      loginFormListener();
      getTokenListener();
      return;
  }
}

// posts.createPost();
// posts.getPost();
// posts.removePost();
// posts.updatePost();

createPost({
  title: "Example Post",
  body: "Also an Example"
})