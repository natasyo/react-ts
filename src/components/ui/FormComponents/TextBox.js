import * as React from 'react';
import './FormComponents.scss';
import { createRef } from 'react';
export class TextBox extends React.Component {
    textInput;
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
        this.textInput = createRef();
        this.changeValue = this.changeValue.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    changeValue(e) {
        this.setState({ value: e.target.value.toString() });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }
    getValue() {
        return this.state.value;
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("label", { className: "form-filed" },
                React.createElement("span", { className: 'form-filed__label' }, this.props.labelText),
                React.createElement("input", { type: this.props.type, value: this.state.value.toString(), placeholder: this.props.placeholder, onChange: this.changeValue, ref: this.textInput }))));
    }
}
