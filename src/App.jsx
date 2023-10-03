import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroList from './components/HeroList/HeroList'
import Person from './components/Person/Person'
import FavoriteColor from './components/FavoriteColor/FavoriteColor'
import Data from './components/Datas/Data'
import Counter from './components/Counter/Counter'
import Timer from './components/Timer/Timer'
import User from './components/User/User'
import ExternalUser from './components/ExternalUser/ExternalUser'

function App() {
  return (
    <>
      <h1>Welcome to React APP</h1>
      <ExternalUser></ExternalUser>
      
      <Timer></Timer>
      <hr />
      <Counter></Counter>
      <hr />
      <Data></Data>
      <hr />
      <FavoriteColor></FavoriteColor>
      <hr />
      <HeroList></HeroList>
    </>
  )
}

export default App
