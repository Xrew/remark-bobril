import * as b from 'bobril';

export interface IData {
  children: b.IBobrilChildren;
  ordered: true | false;
  start: number | null;
  loose: true | false;
}

export const create = (data: IData) => {
  return {
    tag: 'ul',
    children: data.children
  };
};
