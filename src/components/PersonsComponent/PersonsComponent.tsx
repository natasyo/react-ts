// @flow
import * as React from 'react';
import './PersonsComponent.scss';
import { IPerson } from '../../types/iPerson';
import { PersonComponent } from './PersonComponent';
type Props = {
  persons: Array<IPerson>;
};
type State = {
  persons: IPerson[];
};

export class PersonsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={'persons'}>
        {this.props.persons.map((person, index) => (
          <PersonComponent person={person} key={index} />
        ))}
      </div>
    );
  }
}
