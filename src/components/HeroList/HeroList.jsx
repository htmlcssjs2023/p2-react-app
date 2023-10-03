import React from 'react';
import Person from '../Person/Person';

const HeroList = () => {
    // const heros = ['Halim', 'Rahim', 'Karim', "Jalim"];
    const singers = [
      {id:1, name: "Rubel", address:"Mohammadd"},
      {id:2, name: "Jubel", address:"Mirpur"},
      {id:3, name: "Abel", address:"Cirpur"},
      {id:4, name: "Kabel", address:"Durpur"}
    ];

    const article = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, laborum quibusdam obcaecati iure illum veniam temporibus facilis inventore voluptates adipisci? Ipsum laboriosam porro illo rerum quia voluptate dolorem veritatis ullam!"


    return (
        <div>
            {
              singers.map(singer => <Person name={singer.name} address={singer.address} text={article}key={singer.id}></Person>)
            }
          
        </div>
    );
};

export default HeroList;