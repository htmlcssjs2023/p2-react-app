import React from 'react';
import Product from '../Product/Product';

const Data = () => {
    const products = [
        {name: 'laptopoo', price: 153000},
        {name: 'phoneee', price: 93000},
        {name: 'watchuu', price: 33000},
        {name: 'tabletoo', price: 5000},
      ]
    return (
        <div>
            <h2>List Of Product</h2>
            {/* <Product name="Laptop" price="123156"></Product>
            <Product name="Smart Phone" price="4541"></Product>
            <Product name="Wall Clock" price="3212"></Product>
            <Product name="Monitor" price="64544"></Product> */}

            {
               products.map(product => <Product product={product}></Product>)
            }

        </div>
    );
};

export default Data;