// @flow
import * as React from 'react';
import './PersonsComponent.scss';
import { IPerson } from '../../types/iPerson';
import { PersonComponent } from './PersonComponent';
type Props = {
  persons: Array<IPerson>;
};

export function PersonsComponent(props: Props) {
  return (
    <div className={'persons'}>
      {props.persons.map((person, index) => (
        <PersonComponent person={person} key={index} />
      ))}
    </div>
  );
}
