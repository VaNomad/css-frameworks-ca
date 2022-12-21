import { registerFormListener } from "./api/handlers/registerHandler.mjs";
import { loginFormListener } from "./api/handlers/loginHandler.mjs";
import { getTokenListener } from "./api/handlers/getPostsHandler.mjs";
// import { createPost } from "./api/posts/createPosts.mjs";
// import { updatePost } from "./api/posts/updatePosts.mjs"
// import { removePost } from "./api/posts/removePosts.mjs";
import * as posts from "./api/posts/index.mjs";



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
// posts.updatePost();
// posts.removePost();
// posts.getPost();
posts.getPosts().then(console.log);

posts.getPost(1897).then(console.log);

// createPost({
//   title: "Example Post",
//   body: "Also an Example"
// });

// updatePost({
//   id: 1868,
//   title: "UPDATED Example Post",
//   body: "UPDATED Also an Example"
// });

// removePost(1868);

