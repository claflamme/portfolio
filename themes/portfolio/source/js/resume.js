(function() {
  var pdfUrl = '/Cory%20LaFlamme%20-%20Resume.pdf';

  pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
    pdf.getPage(1).then(function(page) {
      var viewport = page.getViewport({ scale: 2 });
      var canvas = document.getElementById('resume-canvas');
      var context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      page.render(renderContext);
    });
  }, function(err) {
    console.error(err);
  });
})();
