function wordCount() {
  str1 = document.querySelector("#tags").value;
  str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
  str1 = str1.replace(/[ ]{2,}/gi, " ");
  str1 = str1.replace(/\n /, "\n");
  document.querySelector("#words").value = str.split(' ').length;
  
}
wordCount();