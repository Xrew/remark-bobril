import * as b from 'bobril';

export interface IData {
  children: b.IBobrilChildren;
}

export const create = (data: IData) => {
  return {
    tag: 'footnote',
    children: data.children
  };
};
