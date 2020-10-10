require("typeface-duru-sans");
require("typeface-roboto");
require("typeface-source-sans-pro");

const ReactDOM = require("react-dom");
const loadableReady = require("@loadable/component").loadableReady;

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback);
    });
  };
};
