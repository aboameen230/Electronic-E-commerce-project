let myhtp = new XMLHttpRequest();
myhtp.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=b04c325451494425b0c81f0870bac070`
);
myhtp.send();
let postsContainer;
myhtp.onreadystatechange = () => {
  if (myhtp.readyState == 4) {
    postsContainer = JSON.parse(myhtp.response).articles;
    console.log(postsContainer);
    displayPosts();
  }
};

function displayPosts() {
  let text = "";
  postsContainer.forEach((post) => {
    post.description == null
      ? ""
      : (text += `<div class="post">
        <img src ="${post.urlToImage}">
        <h6>${post.title.split(" ").splice(0, 3).join(" ")}</h6>
        <p>${post.description.split(" ").splice(0, 5).join(" ")}</p>
        <a href="${post.url}">Read More</a>
        </div>`);
  });
  document.querySelector("#container .container1").innerHTML = text;
}
