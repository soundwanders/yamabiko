// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./assets/js/theme-switcher.js'],
  bundle: true,
  outfile: './_site/bundle.js', 
}).catch(() => process.exit(1)); // Exit with an error code on build failure
