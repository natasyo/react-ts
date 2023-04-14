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

    const pageStart =
      props.page - Math.floor(count / 2) > 1 ? props.page - Math.floor(count / 2) : 1;
    const maxPage =
      pageStart + count >= props.pagination.pages ? props.pagination.pages : pageStart + count;
    for (let i = pageStart; i < maxPage; i++) {
      pageItems.push(i);
    }
    return (
      <div className={'pagination'}>
        <div
          className={props.page - 1 < 1 ? 'pagination__item_disable' : 'pagination__item'}
          onClick={(event) => {
            props.onChangePage(event, props.page - 1);
          }}
        >
          prev
        </div>
        {pageItems.map((page) => {
          return (
            <div
              className={
                page === props.page
                  ? 'pagination__item pagination__item_current'
                  : 'pagination__item'
              }
              key={page}
              onClick={(event) => {
                props.onChangePage(event, page);
              }}
            >
              {page}
            </div>
          );
        })}
        <div
          className={
            props.page + 1 > props.pagination.pages
              ? 'pagination__item_disable'
              : 'pagination__item'
          }
          onClick={(event) => {
            props.onChangePage(event, props.page - 1);
          }}
        >
          next
        </div>
      </div>
    );
  } else return <div className={'pagination__item'}>1</div>;
}
