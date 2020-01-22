(function() {
  var sr = ScrollReveal();
  var $mobileNavContent = $("#mobile-nav-content");
  var $mobileNavBody = $(".modal-body", $mobileNavContent);
  var $navItems = $(".reveal", $mobileNavBody);

  $mobileNavContent.on("shown.bs.modal", function(e) {
    sr.reveal($navItems, {
      interval: 150,
      distance: "50px",
      container: $mobileNavContent.get(0)
    });
  });

  $mobileNavContent.on("hidden.bs.modal", function(e) {
    sr.destroy();
    $navItems.attr("style", null);
  });
})();
