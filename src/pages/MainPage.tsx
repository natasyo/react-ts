import React, { Component } from 'react';
import { AnimeComponent } from '../components/AnimeComponent/AnimeComponent';

class MainPage extends Component {
  render() {
    return (
      <>
        <div className={'content'}>
          <div className="container">
            <h1>Main page</h1>
            <AnimeComponent />
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
