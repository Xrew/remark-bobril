var is = require('unist-util-is');

module.exports = attacher;

function attacher(options) {

    this.Compiler = compile;

    function compile(node) {
        return convert2Bobril(node);
    }
}

function convert2Bobril(node) {
    let children = node.children;

    let convertedChildren = [];
    if (children !== undefined) {
        children.forEach(function (child, index) {
            convertedChildren.push(convert2Bobril(child));
        });
    } else {
        return node.value;
    }

    let component = {tag: 'div', children: convertedChildren};
    if (is('ParagraphNode', node)) {
        component.tag = 'p';
    }

    return component;
}