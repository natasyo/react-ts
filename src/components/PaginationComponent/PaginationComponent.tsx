// @flow
import * as React from 'react';
import { IPagination } from '../../types';
import './Pagination.scss';

type Props = {
  pagination?: IPagination;
};
const pageCount = 10;
let pages: Array<number> = [];
export const PaginationComponent = (props: Props) => {
  pages = [];
  for (
    let i: number = props.pagination?.current_page || 1;
    i <= (props.pagination?.current_page || 1) + pageCount;
    i++
  ) {
    pages.push(i);
  }
  return (
    <div className={'pagination'}>
      {pages.map((page, index) => {
        return (
          <a
            key={index}
            href={`http://api.jikan.moe/v4/anime?=${page}`}
            className={'pagination__item'}
          >
            {page}
          </a>
        );
      })}
    </div>
  );
};
