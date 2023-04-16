import React, { Component } from 'react';
import { CharactersComponent } from '../components/CharacterComponent/CharactersComponent';

type Props = {
  search: string;
};
class MainPage extends Component<Props> {
  render() {
    return (
      <>
        <div className={'content'}>
          <div className="container">
            <h1>Main page</h1>
            <CharactersComponent searchStr={this.props.search} />
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
