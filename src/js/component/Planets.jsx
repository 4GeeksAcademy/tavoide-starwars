import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Planets = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlerMoreDetails = async (id) => {
        try {
            await actions.getDetailPlanets(id);
            navigate("/detailPlanet")

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        actions.fetchPlanets();
    }, []);

    return (
        <div className="container d-flex bg-warning overflow-auto ">
            <h1>Planetas</h1>
            {store.planets.length > 0 ? (
                store.planets.map((planet, index) => (
                    <div className=" bg-warning " key={index}>
                        <div className="card" >
                            <div className="card-body bg-black text-light">
                                <h5 className="card-title">{planet.name}</h5>
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} alt="planeta imagen" />
                            </div>
                            <div className="card-body bg-secondary">
                                <button className="btn btn-primary btn-lg mx-4" onClick={() => handlerMoreDetails(planet.uid)}>Detalles</button>
                                <button className="btn btn-primary btn-lg" onClick={() => actions.toggleFavorite(planet)}>{store.currentFav.some(fav => fav.uid === planet.uid) ? "Quitar": "Agregar"} Favoritos</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay planetas disponibles</p>
            )}
        </div>
    );
};

export default Planets;
