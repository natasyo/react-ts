import * as React from 'react';
import './FormComponents.scss';
import { ChangeEvent, createRef, RefObject } from 'react';

type Props = {
  labelText: string;
  value: string;
  placeholder?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
type State = {
  value: string;
};

export class TextBox extends React.Component<Props, State> {
  textInput: RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.textInput = createRef();
    this.changeValue = this.changeValue.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  changeValue(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value.toString() });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  getValue() {
    return this.state.value;
  }
  render() {
    return (
      <>
        <label className="form-filed">
          <span className={'form-filed__label'}>{this.props.labelText}</span>
          <input
            type={this.props.type}
            value={this.state.value.toString()}
            placeholder={this.props.placeholder}
            onChange={this.changeValue}
            ref={this.textInput}
          />
        </label>
      </>
    );
  }
}
