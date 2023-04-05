// @flow
import * as React from 'react';
import './PersonsComponent.scss';
import { IPerson } from '../../types/iPerson';

type Props = {
  person: IPerson;
};

export function PersonComponent(props: Props) {
  return (
    <div className={'person'}>
      <div className="person__image">
        <img src={props.person.avatarUrl.toString()} alt="" />
      </div>
      <p className="person__name">{props.person.name}</p>
      <p className="person__date">{props.person.date.toString()}</p>
      <p className="person__city">{props.person.city}</p>
    </div>
  );
}
