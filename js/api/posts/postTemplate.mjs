export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("newPost");
  post.innerText = postData.title;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image is taken from ${postData.title}`;
    post.append(img);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate)); 
}

