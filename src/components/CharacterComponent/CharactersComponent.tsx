// @flow
import * as React from 'react';
import { useEffect, useState, MouseEvent } from 'react';
import { ICharacter, IPagination } from '../../types';
import { CharacterController } from '../../Controllers';
import { CharacterItemComponent } from './CharacterItemComponent/CharacterItemComponent';
import './CharacterStyle.scss';
import { PaginationComponent } from '../PaginationComponent/PaginationComponent';

// type Props = {
//
// };
export const CharactersComponent = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pagination, setPagination] = useState<IPagination>();
  const characterController = new CharacterController();
  useEffect(() => {
    characterController.getCharacters(setCharacters, setPagination, page);
  }, []);

  console.log(pagination, characters);
  function changePage(event: MouseEvent, page: number) {
    setPage(page);
    characterController.getCharacters(setCharacters, setPagination, page);
  }
  return (
    <>
      <div className={'character'}>
        {characters.map((character) => {
          return <CharacterItemComponent key={character.id} character={character} />;
        })}
      </div>
      <PaginationComponent pagination={pagination} page={page} onChangePage={changePage} />
    </>
  );
};
