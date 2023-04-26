// @flow
import * as React from 'react';
import './PersonsComponent.scss';
import { PersonComponent } from './PersonComponent';
export class PersonsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'persons' }, this.props.persons.map((person, index) => (React.createElement(PersonComponent, { person: person, key: index })))));
    }
}
