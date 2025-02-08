import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const People = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlerMoreDetails = async (id) => {
        try {
            await actions.getDetailPeoples(id);
            navigate("/detailPeople")

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        actions.fetchPeoples();
    }, []);

    return (
        <div className="container d-flex bg-warning overflow-auto ">
            <h1>People</h1>
            {store.peoples.length > 0 ? (
                store.peoples.map((people, index) => (
                    <div className=" bg-warning " key={index}>
                        <div className="card" >
                            <div className="card-body bg-black text-light">
                                <h5 className="card-title">{people.name}</h5>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} alt="people imagen" />
                            </div>
                            <div className="card-body bg-secondary">
                                <button className="btn btn-primary btn-lg mx-4" onClick={() => handlerMoreDetails(people.uid)}>Detalles</button>
                                <button className="btn btn-primary btn-lg" onClick={() => actions.toggleFavorite(people)}>{store.currentFav.some(fav => fav.uid === people.uid) ? "Quitar": "Agregar"} Favoritos</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay personajes disponibles</p>
            )}
        </div>
    );
};

export default People;