import * as b from 'bobril';
import * as P from './p/lib';
import * as H from './h/lib';
import * as Blockquote from './blockquote/lib';
import * as Code from './code/lib';
import * as List from './ul/lib';
import * as ListItem from './li/lib';
import * as Break from './break/lib';

enum MarkdownType {
  Paragraph = 'paragraph',
  Heading = 'heading'
}

export function generate(node, children): b.IBobrilChildren {

  switch (node.type) {
    case MarkdownType.Paragraph :
      return P.create({
        children: children
      });
    case MarkdownType.Heading:
      return H.create({
        children: children,
        size: node.depth
      });
    case 'text':
    case 'html':
      return children;
    case 'blockquote':
      return Blockquote.create({
        children: children
      });
    case 'inlineCode':
      return {tag: '/', children: children};
    case 'code':
      return Code.create({
        language: node.lang || '',
        children: children
      });
    case 'list':
      return List.create({
        children: children,
        loose: node.loose,
        start: node.start,
        ordered: node.ordered
      });
    case 'listItem':
      return ListItem.create({
        children: children,
        loose: node.loose,
        checked: node.checked
      });
    case 'break':
      return Break.create();

    // Not implemented yet
    case 'table':
    case 'tableRow':
    case 'tableCell':
    case 'thematicBreak':
    case 'emphasis':
    case 'strong':
    case 'delete':
    case 'link':
    case 'image':
    case 'footnote':
    case 'linkReference':
    case 'imageReference':
    case 'footnoteReference':
    case 'definition':
    case 'footnoteDefinition':


    default:
      return {tag: 'div', children: children};
  }
}
