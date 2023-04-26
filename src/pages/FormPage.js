// @flow
import * as React from 'react';
import { FormComponent } from '../components/FormComponent/FormComponent';
import { PersonsComponent } from '../components/PersonsComponent/PersonsComponent';
export class FormPage extends React.Component {
    constructor(props) {
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
        return (React.createElement("div", { className: 'container' },
            React.createElement("div", null,
                React.createElement(FormComponent, { onSendForm: this.updateDate, persons: this.state.persons })),
            React.createElement("div", null,
                React.createElement(PersonsComponent, { persons: this.state.persons }))));
    }
}
