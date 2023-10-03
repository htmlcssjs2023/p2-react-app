import React, { useState } from 'react';
import './FavoriteColor.css';


const FavoriteColor = () => {
    const [color, setColor] = useState(0);
    const [car, setCar] = useState({
        car: "Toyo Ta",
        name: "Mini Bus",
        brand: "T-9383",
        year: "20202",
        blue: "blue"
    });

    const updateColor = ()=>{
       setCar( previousColor=>{
        return {...previousColor, red:"Red"}
       })
    }
    
    return (
        <>
           <h3>My Favorite Color is :{color} </h3>
           <h4>Car has many {car.blue} color and you can show different color by clicking {car.red}</h4>
           <button type='button' onClick={ ()=> setColor("Black")}>Black</button>
           <button type='button' onClick={updateColor}>Change color</button>

        </>
    );
};

export default FavoriteColor;