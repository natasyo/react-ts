// @flow
import * as React from 'react';
import { ICharacter } from '../../../types';

type Props = {
  character: ICharacter;
};
export const CharacterItemComponent = (props: Props) => {
  return (
    <div className={'character__item'}>
      <div className="character__image">
        <img src={props.character.image} alt={props.character.name} />
      </div>
      <div className="character__info">
        <p className={'character__name'}>{props.character.name}</p>
        <div className={'character__info-more'}>
          <p>Location: {props.character.location.name}</p>
          <p>Created: {props.character.created.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
