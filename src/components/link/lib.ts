import {IBobrilChildren} from 'bobril';

export interface IData {
  title: string | null;
  url: string;
  children: IBobrilChildren;
}

export const create = (data: IData) => {
  return {
    tag: 'a',
    attrs: {
      href: data.url,
      title: data.title || ''
    },
    children: data.children
  };
};
