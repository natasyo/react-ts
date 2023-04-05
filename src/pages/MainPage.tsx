import React, { Component } from 'react';
import { ProductsComponent } from '../components/ProductComponent/ProductsComponent';

class MainPage extends Component {
  render() {
    return (
      <>
        <div className={'content'}>
          <div className="container">
            <h1>Main page</h1>
            <ProductsComponent />
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
