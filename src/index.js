import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {FilterableProductTable as FilterableProductTable1} from './FilterableProductTable_v1'
import {FilterableProductTable as FilterableProductTable2} from './FilterableProductTable_v2'
import {FilterableProductTable as FilterableProductTable3} from './FilterableProductTable_v3'

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable3 products={PRODUCTS} />,
    document.getElementById('root')
);
