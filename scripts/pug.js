// This correctly reloads pug includes when they're updated. The official
// hexo pug renderer requires a full rebuild (or a restart of the server).

// Just plonk this into a file inside the "scripts" folder in the
// root of a hexo project.

var pug = require('pug');

hexo.extend.renderer.register('pug', 'html', function(data, options) {
  options.filename = data.path;
  return pug.render(data.text, options);
}, true);
