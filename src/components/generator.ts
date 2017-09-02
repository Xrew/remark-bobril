import {IBobrilChildren} from 'bobril';
import * as Paragraph from './paragraph/lib';
import * as Heading from './heading/lib';
import * as Blockquote from './blockquote/lib';
import * as Code from './code/lib';
import * as List from './list/lib';
import * as ListItem from './listItem/lib';
import * as Break from './break/lib';
import * as ThematicBreak from './thematicBreak/lib';
import * as Table from './table/table';
import * as TableRow from './table/tr';
import * as TableCell from './table/td';
import * as Emphasis from './emphasis/lib';
import * as Strong from './strong/lib';
import * as Delete from './delete/lib';
import * as Link from './link/lib';
import * as Image from './image/lib';

enum NodeType {
  Paragraph = 'paragraph',
  Heading = 'heading',
  Text = 'text',
  Html = 'html',
  Blockquote = 'blockquote',
  InclineCode = 'inlineCode',
  Code = 'code',
  List = 'list',
  ListItem = 'listItem',
  Break = 'break',
  Table = 'table',
  TableRow = 'tableRow',
  TableCell = 'tableCell',
  ThematicBreak = 'thematicBreak',
  Emphasis = 'emphasis',
  Strong = 'strong',
  Delete = 'delete',
  Link = 'link',
  Image = 'image',
  Footnote = 'footnote',
  LinkReference = 'linkReference',
  ImageReference = 'imageReference',
  FootnoteReference = 'footnoteReference',
  Definition = 'definition',
  FootnoteDefinition = 'footnoteDefinition'
}

export function generate(node, children): IBobrilChildren {

  switch (node.type) {
    case NodeType.Paragraph :
      return Paragraph.create({
        children: children
      });

    case NodeType.Heading:
      return Heading.create({
        children: children,
        size: node.depth
      });

    case  NodeType.Html:
      return {tag: '/', children: children};

    case  NodeType.Text:
      return children;

    case  NodeType.Blockquote:
      return Blockquote.create({
        children: children
      });

    case  NodeType.InclineCode:
    case  NodeType.Code:
      return Code.create({
        language: node.lang || '',
        children: children
      });

    case  NodeType.List:
      return List.create({
        children: children,
        loose: node.loose,
        start: node.start,
        ordered: node.ordered
      });

    case  NodeType.ListItem:
      return ListItem.create({
        children: children,
        loose: node.loose,
        checked: node.checked
      });

    case  NodeType.Break:
      return Break.create();

    case  NodeType.Table:
      return Table.create({
        align: node.align,
        children: children
      });

    case  NodeType.TableRow:
      return TableRow.create({
        children: children
      });

    case  NodeType.TableCell:
      return TableCell.create({
        children: children
      });

    case  NodeType.ThematicBreak:
      return ThematicBreak.create();

    case  NodeType.Emphasis:
      return Emphasis.create({
        children: children
      });

    case  NodeType.Strong:
      return Strong.create({
        children: children
      });

    case  NodeType.Delete:
      return Delete.create({
        children: children
      });

    case  NodeType.Link:
      return Link.create({
        url: node.url,
        title: node.title,
        children: children
      });

    case  NodeType.Image:
      return Image.create({
        title: node.title,
        url: node.url,
        alt: node.alt,
        children: children
      });

    // Not implemented yet
    case  NodeType.Footnote:
    case  NodeType.LinkReference:
    case  NodeType.ImageReference:
    case  NodeType.FootnoteReference:
    case  NodeType.Definition:
    case  NodeType.FootnoteDefinition:

    default:
      return {tag: 'div', children: children};
  }
}
