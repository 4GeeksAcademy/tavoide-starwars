import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const DetailPeople = () => {
    const { store, actions } = useContext(Context);
    const getInfoPeoples = async () => {
        try {
            await actions.getDetailPeoples()
        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        getInfoPeoples();
    }, []);

    return (
        <div className="container mb-1" style={{ marginTop: '80px' }}>
            <h1 className="text-center text-warnin"  >{store.peopleProperties.properties.name || "Details"}</h1>
            <div className="card mx-auto" style={{ width: "600px" }}>
                <img
                    src={`https://starwars-visualguide.com//assets/img/people/${store.peopleProperties.uid}.jpg`}
                    className="card-img-top"
                    alt={store.peopleProperties.properties.name}
                />
                <div className="card-body">
                <h5 className="card-title">Type: People</h5>
                    <p><strong>Height: </strong>{store.peopleProperties.properties.height || 'N/A'}</p>
                    <p><strong>Mass: </strong>{store.peopleProperties.properties.mass || 'N/A'}</p>
                    <p><strong>Hair Color: </strong>{store.peopleProperties.properties.hair_color || 'N/A'}</p>
                    <p><strong>Skin Color: </strong>{store.peopleProperties.properties.skin_color || 'N/A'}</p>
                    <p><strong>Eye Color: </strong>{store.peopleProperties.properties.eye_color || 'N/A'}</p>
                    <p><strong>Birth Year: </strong>{store.peopleProperties.properties.birth_year || 'N/A'}</p>
                    <p><strong>Gender: </strong>{store.peopleProperties.properties.gender || 'N/A'}</p>
                    <p><strong>Description: </strong>{store.peopleProperties.description || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailPeople