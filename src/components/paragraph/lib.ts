import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
}

export const create = (data: IData) => {
  return {
    tag: 'p',
    children: data.children
  };
};
