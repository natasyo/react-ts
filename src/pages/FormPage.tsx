// @flow
import * as React from 'react';
import { FormComponent } from '../components/FormComponent/FormComponent';
import { IPerson } from '../types/iPerson';
import { PersonsComponent } from '../components/PersonsComponent/PersonsComponent';

type Props = undefined;
type State = {
  persons: IPerson[];
};
export class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    localStorage.removeItem('persons');

    this.state = {
      persons: localStorage.getItem('persons')
        ? JSON.parse(localStorage.getItem('persons') || '')
        : [],
    };
    this.updateDate = this.updateDate.bind(this);
  }
  updateDate() {
    console.log(this.state.persons);
    this.setState({
      persons: localStorage.getItem('persons')
        ? JSON.parse(localStorage.getItem('persons') || '')
        : [],
    });
  }
  render() {
    return (
      <div className={'container'}>
        <div>
          <FormComponent onSendForm={this.updateDate} persons={this.state.persons} />
        </div>
        <div>
          <PersonsComponent persons={this.state.persons} />
        </div>
      </div>
    );
  }
}
