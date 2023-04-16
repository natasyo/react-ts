// @flow
import * as React from 'react';
import './PersonsComponent.scss';
import { IPerson } from '../../types/iPerson';

type Props = {
  person: IPerson;
};
type State = unknown;

export class PersonComponent extends React.Component<Props, State> {
  render() {
    return (
      <div className={'person'}>
        <div className="person__image">
          <img src={this.props.person.avatarUrl.toString()} alt="" />
        </div>
        <p className="person__name">{this.props.person.name}</p>
        <p className="person__date">{this.props.person.date.toString()}</p>
        <p className="person__city">{this.props.person.city}</p>
      </div>
    );
  }
}
