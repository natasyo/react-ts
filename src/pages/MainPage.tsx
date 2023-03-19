import React, { Component } from 'react';
import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { ProductsComponent } from '../components/ProductComponent/ProductsComponent';

class MainPage extends Component {
  render() {
    return (
      <>
        <HeaderComponent />
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
