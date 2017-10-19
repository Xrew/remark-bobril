import {IBobrilChildren} from 'bobril';

export interface IData {
  children: IBobrilChildren;
  ordered: true | false;
  start: number | null;
  loose: true | false;
}

export const create = (data: IData) => {
  return {
    tag: data.ordered ? 'ol' : 'ul',
    children: data.children
  };
};
