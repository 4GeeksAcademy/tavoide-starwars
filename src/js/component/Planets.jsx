import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'

const Planets = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPeople();
    }, []);
    return (
        <div>
            <h1>Planetas</h1>
            <ul>
                {store.Planets && store.planets.map((planets, index) => {
                return (
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <li key={index}> planets.name </li>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
            }
            </ul>    
        </div>
    )
}

export default Planets
