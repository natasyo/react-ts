// @flow
import * as React from 'react';
import './FormComponents.scss';
import { ChangeEvent, createRef, RefObject } from 'react';

type Props = {
  labelText: string;
  items: Array<{ text: string; value: string }>;
};
type State = {
  value: string;
};

export class Select extends React.Component<Props, State> {
  select: RefObject<HTMLSelectElement>;
  constructor(props: Props) {
    super(props);
    this.select = createRef<HTMLSelectElement>();
    this.changeValue = this.changeValue.bind(this);
    this.getValue = this.getValue.bind(this);
    this.state = { value: this.props.items[0].value };
  }
  changeValue(event: ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: event.target.value });
  }
  getValue(): string {
    return this.state.value;
  }
  render() {
    return (
      <>
        <label className="form-filed">
          <span className={'form-filed__label'}>{this.props.labelText}</span>
          <select
            className={'form-filed__input'}
            ref={this.select}
            onChange={this.changeValue}
            required={true}
            value={this.state.value}
          >
            {this.props.items.map((item) => (
              <option value={item.value} key={item.value}>
                {item.text}
              </option>
            ))}
          </select>
        </label>
      </>
    );
  }
}
