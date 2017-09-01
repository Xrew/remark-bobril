import * as b from 'bobril';

export interface IData {
  children: b.IBobrilChildren;
  loose: true | false;
  checked: true | false | null;
}

export const create = (data: IData) => {
  return {
    tag: 'li',
    children: data.children
  };
};
