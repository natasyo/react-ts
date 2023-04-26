// @flow
import * as React from 'react';
import './FormComponents.scss';
import { createRef } from 'react';
export class Select extends React.Component {
    select;
    constructor(props) {
        super(props);
        this.select = createRef();
        this.changeValue = this.changeValue.bind(this);
        this.getValue = this.getValue.bind(this);
        this.state = { value: this.props.items[0].value };
    }
    changeValue(event) {
        this.setState({ value: event.target.value });
    }
    getValue() {
        return this.state.value;
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("label", { className: "form-filed" },
                React.createElement("span", { className: 'form-filed__label' }, this.props.labelText),
                React.createElement("select", { className: 'form-filed__input', ref: this.select, onChange: this.changeValue, required: true, value: this.state.value }, this.props.items.map((item) => (React.createElement("option", { value: item.value, key: item.value }, item.text)))))));
    }
}
