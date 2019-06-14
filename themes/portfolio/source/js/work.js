(function() {
  var sr = ScrollReveal();
  var options = {
    distance: '35px',
    duration: 1000,
    viewFactor: 0.1,
    interval: 200,
    mobile: false,
  };

  sr.reveal('.project-reveal-left', Object.assign({}, options, { origin: 'left' }));
  sr.reveal('.project-reveal-right', Object.assign({}, options, { origin: 'right' }));
})();
