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
  url: "https://www.uncb.xyz/blog",
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



var Scrambler = function (el) {
  'use strict';
  var m = this;
  m.init = function () {
    m.codeletters = "電車のふるさと生きがい駅はど森林浴こ懐かしいです甘美か";
    // i love anime
    // ₿Ξ⟠✕ÐŁӾꜩξ◈₮₳
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      el.innerText
    ];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function (length) {
    var random_text = '';
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function () {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 10);
    } else {
      setTimeout(m.animateFadeBuffer, 10);
    }
  };

  m.animateFadeBuffer = function () {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
      }
    }

    var do_cycles = false;
    var message = '';

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.init();
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
const scrambledMsg = document.querySelectorAll(".scramble");
let alreadyScrambled = [];
document.addEventListener('scroll', function () {
  scrambledMsg.forEach((element) => {
    if (isInViewport(element) && !alreadyScrambled.includes(element)) {
      new Scrambler(element);
      alreadyScrambled.push(element);
    }
  })
})



/* Set width of all animated text to match container */
let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};