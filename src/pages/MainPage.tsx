import React, { Component } from 'react';
import { CharactersComponent } from '../components/CharacterComponent/CharactersComponent';

class MainPage extends Component {
  render() {
    return (
      <>
        <div className={'content'}>
          <div className="container">
            <h1>Main page</h1>
            <CharactersComponent />
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
