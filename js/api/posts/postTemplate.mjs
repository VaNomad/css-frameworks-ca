export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("newPost");
  post.innerText = postData.title;
  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}