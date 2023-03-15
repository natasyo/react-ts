// @flow
import * as React from 'react';
import { SearchBar } from '../ui/SearchBar/SearchBar';
import './HeaderComponent.scss';
type Props = {};
type State = {};

export class HeaderComponent extends React.Component<Props, State> {
  render() {
    return (
      <header className={'header'}>
        <div className="container">
          <SearchBar />
        </div>
      </header>
    );
  }
}
