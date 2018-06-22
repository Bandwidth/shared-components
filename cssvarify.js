const replace = require('replace-in-file');
const options = {
  files: 'src/components/Button/**',
  from: /\${(?:get|themeGet)\('(([A-Za-z]+)(\.([A-Za-z])+)*)'\)\}/g,
  to: (full, match) => {
    const c = `var(--${match
      .replace(/\./g, '-')
      .replace(/[A-Z]/g, g => `-${g[0].toLowerCase()}`)})`;
    console.log("MATCH: ", match, c);
    return c;
  },
  dry: true,
};

replace(options)
  .then(changes => {
    console.log('Modified files:', changes.join(', '));
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
