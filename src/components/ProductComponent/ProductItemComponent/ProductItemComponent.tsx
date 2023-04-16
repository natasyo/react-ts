import './ProductItemComponent.scss';

// @flow
import * as React from 'react';
import { IProduct } from '../../../types/iProduct';

// type State = {};
type Props = {
  product: IProduct;
};

export class ProductItemComponent extends React.Component<Props> {
  render() {
    return (
      <div className={'product-item'}>
        <div className="product-item__thumbnail">
          <img src={this.props.product.thumbnail} alt={this.props.product.title} />
        </div>
        <h3 className="product-item__title">{this.props.product.title}</h3>
        <div className="product-item__desc">{this.props.product.description}</div>
        <div className="product-item__price-block">
          <p className="product-item__price">${this.props.product.price}</p>
        </div>
      </div>
    );
  }
}
