import {IBobrilChildren} from 'bobril';

export interface IData {
  title: string | null;
  alt: string | null;
  url: string;
  children: IBobrilChildren
}

export const create = (data: IData) => {
  return {
    tag: 'img',
    attrs: {
      src: data.url,
      title: data.title || '',
      alt: data.title || ''
    },
    children: data.children
  };
};
