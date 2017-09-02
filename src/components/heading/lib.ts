import * as b from 'bobril';

export interface IData {
  children: b.IBobrilChildren;
  size: number;
}

export const create = (data: IData) => {
  return {
    tag: `h${data.size}`,
    children: data.children,
  };
};
