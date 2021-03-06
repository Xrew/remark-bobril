import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
  language: string;
}

export const create = (data: IData) => {
  return {
    tag: 'pre',
    children: {
      tag: 'code',
      className: data.language,
      children: data.children
    }
  };
};
