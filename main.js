import "./index.css";

// function scrollHandler() {
//   document.querySelector(".scroll-label").style.opacity = "0";
//   document.querySelector(".scroll-indicator").style.height = "0";
//   setTimeout(() => {
//     document.querySelector(".scroll-container").remove();
//   }, 2000);
//   document.removeEventListener("scroll", scrollHandler);
// }

// document.addEventListener("scroll", scrollHandler);

const api = new GhostContentAPI({
  url: "https://www.unswcbs.com/blog",
  key: "837c5e73ef5b72d3b5e9e23be8",
  version: "v2",
});
// window.innerWidth < 760 ? 3 : 6;
api.posts
  .browse({ limit: 6, include: "tags" })
  .then((posts) => {
    var temp = document.getElementsByTagName("template")[0]; // reference of template tag in DOM;
    posts.forEach((post) => {
      var card = temp.content.cloneNode(true); // copy of template's content
      var image = card.querySelector(".card-img-top");
      var title = card.querySelector(".card-title");
      var subtitle = card.querySelector(".card-text");
      var button = card.querySelector(".btn-primary");
      button.href = post.url;
      image.alt = post.title;
      image.src = post.feature_image;
      subtitle.textContent = post.custom_excerpt;
      title.textContent = post.title;
      var cardContainer = document.getElementById("blog-posts"); // place on the page where we want to append our template
      cardContainer.appendChild(card); // append the template's copy to the page
    });
  });