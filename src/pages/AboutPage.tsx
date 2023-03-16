import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { ProductsComponent } from '../components/ProductComponent/ProductsComponent';

class AboutPage extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <div className={'content'}>
          <div className="container">
            <h1>About page</h1>
          </div>
        </div>
      </>
    );
  }
}

// AboutPage.propTypes = {};

export default AboutPage;
