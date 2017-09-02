import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
}

export const create = (data: IData) => {
  return {
    tag: 'tr',
    children: data.children
  };
};
