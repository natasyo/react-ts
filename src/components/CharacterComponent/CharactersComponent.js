// @flow
import * as React from 'react';
import { useState } from 'react';
import { CharacterItemComponent } from './CharacterItemComponent/CharacterItemComponent';
import './CharacterStyle.scss';
import { PaginationComponent } from '../PaginationComponent/PaginationComponent';
import { useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../store/CharacterAPI';
export const CharactersComponent = () => {
    const [page, setPage] = useState(1);
    const search = useSelector((state) => state.search.searchString);
    const { data, isLoading } = useGetCharactersQuery({
        page: page.toString(),
        name: search,
    });
    function changePage(event, page) {
        setPage(page);
    }
    if (isLoading) {
        return React.createElement("div", null, "Loading...");
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'character' }, data.results.map((character) => {
                return React.createElement(CharacterItemComponent, { key: character.id, character: character });
            })),
            React.createElement(PaginationComponent, { pagination: data.info, page: page, onChangePage: changePage })));
    }
};
