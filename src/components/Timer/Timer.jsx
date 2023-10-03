import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count + 1);
        },1000);
    })
  
    return (
        <div>
           <h2>Start Session</h2>
           <h3>Time : {count}</h3>
        </div>
    );
};

export default Timer;