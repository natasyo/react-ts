// @flow
import * as React from 'react';
import * as data from '../../data/products.json';
import { ProductItemComponent } from './ProductItemComponent/ProductItemComponent';
import './ProductsComponent.scss';
// type Props = {};
// type State = {};
export class ProductsComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: 'products' }, data.products.map((productItem) => (React.createElement(ProductItemComponent, { product: productItem, key: productItem.id.toString() })))));
    }
}
