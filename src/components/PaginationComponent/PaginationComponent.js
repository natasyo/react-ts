// @flow
import * as React from 'react';
import './PaginationComponent.scss';
const count = 10;
export function PaginationComponent(props) {
    if (props.pagination) {
        const pageItems = [];
        const pageStart = props.page - Math.floor(count / 2) > 1 ? props.page - Math.floor(count / 2) : 1;
        const maxPage = pageStart + count >= props.pagination.pages ? props.pagination.pages : pageStart + count;
        for (let i = pageStart; i < maxPage; i++) {
            pageItems.push(i);
        }
        return (React.createElement("div", { className: 'pagination' },
            React.createElement("div", { className: props.page - 1 < 1 ? 'pagination__item_disable' : 'pagination__item', onClick: (event) => {
                    props.onChangePage(event, props.page - 1);
                } }, "prev"),
            pageItems.map((page) => {
                return (React.createElement("div", { className: page === props.page
                        ? 'pagination__item pagination__item_current'
                        : 'pagination__item', key: page, onClick: (event) => {
                        props.onChangePage(event, page);
                    } }, page));
            }),
            React.createElement("div", { className: props.page + 1 > props.pagination.pages
                    ? 'pagination__item_disable'
                    : 'pagination__item', onClick: (event) => {
                    props.onChangePage(event, props.page - 1);
                } }, "next")));
    }
    else
        return React.createElement("div", { className: 'pagination__item' }, "1");
}
