import React from 'react';
import './User.css';

const User = (props) => {
    const { name, username, email, address } = props.user;
    return (
        <div>
            <div className="user">
                <p><b>Name :</b>{name}</p>
                <p><b>User Name :</b>{username}</p>
                <p><b>Email :</b>{email}</p>
                <p><b>Street :</b>{address.street}</p>
            </div>

        </div>
    );
};

export default User;