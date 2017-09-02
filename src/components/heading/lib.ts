import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
  size: number;
}

export const create = (data: IData) => {
  return {
    tag: `h${data.size}`,
    children: data.children,
  };
};
