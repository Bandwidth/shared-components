const propTypesToMarkdown = propTypes => {
  Object.keys(propTypes).forEach(key => {
    const type = propTypes[key];

    console.log(type);
  });
};

module.exports = propTypesToMarkdown;
