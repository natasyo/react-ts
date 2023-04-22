// @flow
import * as React from 'react';
import { useState, MouseEvent } from 'react';
import { ICharacterResult } from '../../types';
import { CharacterItemComponent } from './CharacterItemComponent/CharacterItemComponent';
import './CharacterStyle.scss';
import { PaginationComponent } from '../PaginationComponent/PaginationComponent';
import { useSelector } from 'react-redux';

import { useGetCharactersQuery } from '../../store/CharacterAPI';
import type { RootState } from './../../store';

export const CharactersComponent = () => {
  const [page, setPage] = useState(1);
  const search = useSelector((state: RootState) => state.search.searchString);
  const { data, isLoading } = useGetCharactersQuery({
    page: page.toString(),
    name: search,
  });

  function changePage(event: MouseEvent, page: number) {
    setPage(page);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className={'character'}>
          {(data as ICharacterResult).results.map((character) => {
            return <CharacterItemComponent key={character.id} character={character} />;
          })}
        </div>
        <PaginationComponent
          pagination={(data as ICharacterResult).info}
          page={page}
          onChangePage={changePage}
        />
      </>
    );
  }
};
