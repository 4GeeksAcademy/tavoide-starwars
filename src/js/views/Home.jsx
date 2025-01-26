import React, {useContext, useState} from 'react'
import Planets from '../component/Planets.jsx'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'



 export const Home = () => {
    const {store, actions} = useContext(Context)

    const [page, setPage] = useState(1);



  return (
    <div>
      <h1>
        {Planets}
      </h1>
    </div>
  )
}


