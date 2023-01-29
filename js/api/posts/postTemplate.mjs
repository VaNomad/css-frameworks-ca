import { load } from "../../storage/storage.mjs";
import { deletePost } from "../handlers/deletePostHandler.mjs";
import { editPost } from "./editPost.mjs";

export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("newPost", "card", "my-2", "p-3");
  post.innerText = postData.title;

  const viewPost = document.createElement("a");
  viewPost.innerText = "View Post"
  viewPost.classList.add("secondary")
  viewPost.setAttribute('href', `post.html?id=${postData.id}`)

  post.appendChild(viewPost)

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image is taken from ${postData.title}`;
    post.append(img);
  }

  if (postData.author.name === load("profile").name) {
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    deleteBtn.innerText = "Delete"
    deletePost(deleteBtn, postData.id)
    editBtn.innerText = "Edit"
    editPost(editBtn, postData.id)
    post.append(deleteBtn);
    post.append(editBtn);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate)); 
}

export function editLicence(name, id) {
  if (name === load("profile").name && id === load("id").id) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Post"
    deleteBtn.classList.add("btn", "bg-danger", "mx-auto");
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit Post"
    editBtn.classList.add("btn", "bg-secondary", "mx-auto")
  }
}