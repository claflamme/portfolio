(function() {
  var sr = ScrollReveal();
  var options = {
    distance: '50px',
    duration: 1000,
    viewFactor: 0.1,
    interval: 200,
  };

  sr.reveal('.reveal', $.extend({}, options));
})();
