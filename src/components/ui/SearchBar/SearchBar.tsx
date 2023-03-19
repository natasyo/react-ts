// @flow
import * as React from 'react';
import './SearchBar.scss';
import { ChangeEvent } from 'react';

type Props = unknown;
type State = {
  value: string;
};

export class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem('search') || '',
    };

    this.changeValue = this.changeValue.bind(this);
  }
  changeValue(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value.toString() });
    // console.log(e.target.value);
  }
  componentWillUnmount() {
    localStorage.setItem('search', this.state.value);
  }
  componentDidUpdate() {
    localStorage.setItem('search', this.state.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          className={'search-bar__field'}
          value={this.state.value}
          onChange={this.changeValue}
          placeholder={'Search'}
        />
        <button className={'search-bar__btn'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
    );
  }
}
