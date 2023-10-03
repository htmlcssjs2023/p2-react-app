import React from 'react';
import './Person.css';
const Person = (props) => {
    // const {name, address} = props.name;
    console.log(props);

    return (
        <div>
            <div className="props">
                <h1>Name : {props.name}</h1>
                <h1> Address: {props.address}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Person;