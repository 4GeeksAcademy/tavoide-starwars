import React, {useContext, useState, useEffect} from 'react'
import Planets from '../component/Planets.jsx'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import People from '../component/People.jsx'
import Starships from '../component/Starships.jsx'



 export const Home = () => {


  

  return (
    <div className='container bg-black'>
      <h1>
       <Planets/>
      </h1>
      <h1>
        <People/>
      </h1>
      <h2> <Starships /> </h2>
    </div>
  )
}


