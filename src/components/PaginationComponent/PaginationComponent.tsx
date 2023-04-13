// @flow
import * as React from 'react';
import { IPagination } from '../../types';
import './PaginationComponent.scss';
import { MouseEvent } from 'react';

type Props = {
  pagination?: IPagination;
  page: number;
  onChangePage: (event: MouseEvent<HTMLDivElement>, page: number) => void;
};

const count = 10;
export function PaginationComponent(props: Props) {
  if (props.pagination) {
    const pageItems: Array<number> = [];
    const maxPage =
      props.page + count >= props.pagination.pages ? props.pagination.pages : props.page + count;
    for (let i = props.page; i < maxPage; i++) {
      pageItems.push(i);
    }
    return (
      <div className={'pagination'}>
        {pageItems.map((page) => {
          return (
            <div
              className={'pagination__item'}
              key={page}
              onClick={(event) => {
                props.onChangePage(event, page);
              }}
            >
              {page}
            </div>
          );
        })}
      </div>
    );
  } else return <div className={'pagination__item'}>1</div>;
}
