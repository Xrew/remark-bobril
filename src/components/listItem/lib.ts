import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
  loose: true | false;
  checked: true | false | null;
}

export const create = (data: IData) => {
  return {
    tag: 'li',
    children: data.children,
  };
};
