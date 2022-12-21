import { registerFormListener } from "./api/handlers/registerHandler.mjs";
import { loginFormListener } from "./api/handlers/loginHandler.mjs";
import { getTokenListener } from "./api/handlers/getPostsHandler.mjs";
import { createPost } from "./api/posts/createPosts.mjs";
// import * as posts from "./api/posts/index.mjs";



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