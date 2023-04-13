import { ICharacter, ICharacterResult, IPagination } from '../types';

export class CharacterController {
  getCharacters(
    setCharacters: (character: ICharacter[]) => void,
    setPagination: (pagination: IPagination) => void,
    page = 1
  ) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((result) => {
        const characterResult = result as ICharacterResult;
        setCharacters(characterResult.results);
        setPagination(characterResult.info);
      });
  }
}
