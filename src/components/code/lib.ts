import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
  language: string;
}

export const create = (data: IData) => {
  return {
    tag: 'code',
    className: data.language,
    children: {
      tag: 'pre',
      children: data.children
    }
  };
};
