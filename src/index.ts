import * as ComponentGenerator from './components/generator';


const attacher = function(_options) {

  this.Compiler = compile;

  function compile(node) {
    return convert2Bobril(node);
  }
};

export default attacher;


function convert2Bobril(node) {
  let children = node.children;

  let convertedChildren = [];
  if (children !== undefined) {
    children.forEach((child) => {
      convertedChildren.push(convert2Bobril(child));
    });
  } else {
    return ComponentGenerator.generate(node, node.value)
  }

  return ComponentGenerator.generate(node, convertedChildren);
}
