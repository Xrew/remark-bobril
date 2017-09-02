import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
}

export const create = (data: IData) => {
  return {
    tag: 'emphasis',
    children: data.children
  };
};
