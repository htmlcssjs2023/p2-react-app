import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    // Add Cart
    const addCart = ()=>{
       const increaseCart = setCount(count + 1);
       return increaseCart;
    }
    // Decrease CArt 

    const decreaseCart = ()=>{
        // if(count === 0){
        //     setCount(count)
        // }
        // else{
        //     setCount(count -1);
        // }

        // ======== ternary operator
        count === 0 ? setCount(count): setCount(count -1);
    }
    return (
        <div className='counter'>
            <h1>Cart : {count}</h1>
            <button type='button' onClick={addCart}>Add Cart</button>
            <button type='button' onClick={decreaseCart}>Minus Cart</button>
        </div>
    );
};

export default Counter;