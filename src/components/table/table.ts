import {IBobrilChildren} from 'bobril';

export enum AlignType {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

export interface IData {
  children: IBobrilChildren;
  align: (AlignType | null)[];
}

export const create = (data: IData) => {
  return {
    tag: 'table',
    children: data.children
  };
};
