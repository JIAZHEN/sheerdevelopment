$(document).ready(function () {
  $("#search").keyup(function (event) {
    if (event.keyCode == 13) {
      $("#search").submit();
    }
  });

  $(".grid").infinitescroll({
    navSelector: ".pagination", // selector for the paged navigation
    nextSelector: ".pagination .next a", // selector for the NEXT link (to page 2)
    itemSelector: ".post-item", // selector for all items you'll retrieve
    animate: true,
    loading: {
      finishedMsg: "<em>Congratulations, you've reached the end.</em>",
      img: "#{asset_pack_path('media/images/loading.gif')}"
    },
    // trigger Masonry as a callback
    function(newElements) {
      // hide new items while they are loading
      var $newElems = $(newElements).css({ opacity: 0 });
      // ensure that images load before adding to masonry layout
      $newElems.imagesLoaded(function () {
        // show elems now they're ready
        $newElems.animate({ opacity: 1 });
      });
    }
  });

  if ($(".display-disqus").length) {
    var disqus_config = function () {
      this.page.url = "#{request.original_url}";
      this.page.identifier = "#{@post.disqus_identifier}";
    };

    (function () {
      var d = document,
        s = d.createElement("script");
      s.src = "//sheerdevelopment.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
});
