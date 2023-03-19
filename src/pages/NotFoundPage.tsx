import React, { Component } from 'react';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
// import PropTypes from 'prop-types';

class NotFoundPage extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <div className={'content'}>
          <div className="container">
            <h1>404 page not found</h1>
          </div>
        </div>
      </>
    );
  }
}

// NotFoundPage.propTypes = {};

export default NotFoundPage;
