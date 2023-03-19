// @flow
import * as React from 'react';
import { SearchBar } from '../ui/SearchBar/SearchBar';
import './HeaderComponent.scss';
import { Link } from 'react-router-dom';
// type Props = {};
// type State = {};

export class HeaderComponent extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <div className="container header__container">
          <nav className={'header__menu'}>
            <Link to={'/'} className={'header__menu-item'}>
              Main
            </Link>
            <Link to="/about" className={'header__menu-item'}>
              About
            </Link>
          </nav>
          <SearchBar />
        </div>
      </header>
    );
  }
}
