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


$(function () {

  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {

    $('.js-clone-nav').each(function () {
      var $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });


    setTimeout(function () {

      var counter = 0;
      $('.site-mobile-menu .has-children').each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle': 'collapse',
          'data-target': '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class': 'collapse',
          'id': 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function (e) {
      var $this = $(this);
      if ($this.closest('li').find('.collapse').hasClass('show')) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();

    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })

    $('body').on('click', '.js-menu-toggle', function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($('body').hasClass('offcanvas-menu')) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    })

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  };
  siteMenuClone();

});
