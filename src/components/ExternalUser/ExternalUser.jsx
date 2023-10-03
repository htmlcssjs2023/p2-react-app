import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './ExternalUser.css';

const ExternalUser = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data));
    })
    return (
        <div>
             <p>User Length: {users.length}</p>
            <div className="user-container">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default ExternalUser;