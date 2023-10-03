import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price } = props.product;
    return (
        <div>
            <div className="product">
                <p>Name : {name}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Product;