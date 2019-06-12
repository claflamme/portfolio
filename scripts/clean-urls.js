// Put this file inside the `/scripts` folder in the root of a hexo install.
// If the folder isn't there, create it.

const fs = require('fs');

hexo.on('generateAfter', () => {
  hexo.route.list().forEach((route, i) => {
    if (route.endsWith('.html') && !route.endsWith('index.html')) {
      let fileContents = '';
      const fileStream = hexo.route.get(route);
      const newRouteName = route.replace('.html', '/index.html');
      hexo.route.remove(route);

      fileStream.on('data', (chunk) => {
        fileContents += chunk;
      });

      fileStream.on('end', () => {
        hexo.route.set(newRouteName, fileContents);
      });
    }
  });
});
