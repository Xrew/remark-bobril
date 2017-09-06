(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.remarkBobril = factory());
}(this, (function () { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var lib = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'p',
        children: data.children
    };
};
});

var lib$2 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: "h" + data.size,
        children: data.children,
    };
};
});

var lib$4 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: "blockquote",
        children: data.children,
    };
};
});

var lib$6 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'code',
        className: data.language,
        children: {
            tag: 'pre',
            children: data.children
        }
    };
};
});

var lib$8 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'ul',
        children: data.children
    };
};
});

var lib$10 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'li',
        children: data.children
    };
};
});

var lib$12 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function () {
    return {
        tag: 'br'
    };
};
});

var lib$14 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function () {
    return {
        tag: 'hr'
    };
};
});

var table = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlignType;
(function (AlignType) {
    AlignType["Left"] = "left";
    AlignType["Right"] = "right";
    AlignType["Center"] = "center";
})(AlignType = exports.AlignType || (exports.AlignType = {}));
exports.create = function (data) {
    return {
        tag: 'table',
        children: data.children
    };
};
});

var tr = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'tr',
        children: data.children
    };
};
});

var td = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'td',
        children: data.children
    };
};
});

var lib$16 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'emphasis',
        children: data.children
    };
};
});

var lib$18 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'b',
        children: data.children
    };
};
});

var lib$20 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'del',
        children: data.children
    };
};
});

var lib$22 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'a',
        attrs: {
            href: data.url,
            title: data.title || ''
        },
        children: data.children
    };
};
});

var lib$24 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = function (data) {
    return {
        tag: 'img',
        attrs: {
            src: data.url,
            title: data.title || '',
            alt: data.title || ''
        },
        children: data.children
    };
};
});

var generator = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
















var NodeType;
(function (NodeType) {
    NodeType["Paragraph"] = "paragraph";
    NodeType["Heading"] = "heading";
    NodeType["Text"] = "text";
    NodeType["Html"] = "html";
    NodeType["Blockquote"] = "blockquote";
    NodeType["InclineCode"] = "inlineCode";
    NodeType["Code"] = "code";
    NodeType["List"] = "list";
    NodeType["ListItem"] = "listItem";
    NodeType["Break"] = "break";
    NodeType["Table"] = "table";
    NodeType["TableRow"] = "tableRow";
    NodeType["TableCell"] = "tableCell";
    NodeType["ThematicBreak"] = "thematicBreak";
    NodeType["Emphasis"] = "emphasis";
    NodeType["Strong"] = "strong";
    NodeType["Delete"] = "delete";
    NodeType["Link"] = "link";
    NodeType["Image"] = "image";
    NodeType["Footnote"] = "footnote";
    NodeType["LinkReference"] = "linkReference";
    NodeType["ImageReference"] = "imageReference";
    NodeType["FootnoteReference"] = "footnoteReference";
    NodeType["Definition"] = "definition";
    NodeType["FootnoteDefinition"] = "footnoteDefinition";
})(NodeType || (NodeType = {}));
function generate(node, children) {
    switch (node.type) {
        case NodeType.Paragraph:
            return lib.create({
                children: children
            });
        case NodeType.Heading:
            return lib$2.create({
                children: children,
                size: node.depth
            });
        case NodeType.Html:
            return { tag: '/', children: children };
        case NodeType.Text:
            return children;
        case NodeType.Blockquote:
            return lib$4.create({
                children: children
            });
        case NodeType.InclineCode:
        case NodeType.Code:
            return lib$6.create({
                language: node.lang || '',
                children: children
            });
        case NodeType.List:
            return lib$8.create({
                children: children,
                loose: node.loose,
                start: node.start,
                ordered: node.ordered
            });
        case NodeType.ListItem:
            return lib$10.create({
                children: children,
                loose: node.loose,
                checked: node.checked
            });
        case NodeType.Break:
            return lib$12.create();
        case NodeType.Table:
            return table.create({
                align: node.align,
                children: children
            });
        case NodeType.TableRow:
            return tr.create({
                children: children
            });
        case NodeType.TableCell:
            return td.create({
                children: children
            });
        case NodeType.ThematicBreak:
            return lib$14.create();
        case NodeType.Emphasis:
            return lib$16.create({
                children: children
            });
        case NodeType.Strong:
            return lib$18.create({
                children: children
            });
        case NodeType.Delete:
            return lib$20.create({
                children: children
            });
        case NodeType.Link:
            return lib$22.create({
                url: node.url,
                title: node.title,
                children: children
            });
        case NodeType.Image:
            return lib$24.create({
                title: node.title,
                url: node.url,
                alt: node.alt,
                children: children
            });
        // Not implemented yet
        case NodeType.Footnote:
        case NodeType.LinkReference:
        case NodeType.ImageReference:
        case NodeType.FootnoteReference:
        case NodeType.Definition:
        case NodeType.FootnoteDefinition:
        default:
            return { tag: 'div', children: children };
    }
}
exports.generate = generate;
});

var build = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function default_1(_options) {
    this.Compiler = compile;
    function compile(node) {
        return convert2Bobril(node);
    }
}
exports.default = default_1;

function convert2Bobril(node) {
    var children = node.children;
    var convertedChildren = [];
    if (children !== undefined) {
        children.forEach(function (child) {
            convertedChildren.push(convert2Bobril(child));
        });
    }
    else {
        return generator.generate(node, node.value);
    }
    return generator.generate(node, convertedChildren);
}
});

var index = unwrapExports(build);

return index;

})));
