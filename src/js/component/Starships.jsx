import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Starships = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlerMoreDetails = async (id) => {
        try {
            await actions.getDetailStarships(id);
            navigate("/detailStarship")

        } catch (error) {
            console.error(error);
        }
    };
    const handlerFav = async (item) => {
        try {
            await actions.addToFavorites(item);
            console.log(handlerFav)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        actions.fetchStarships();
    }, []);

    return (
        <div className="container d-flex bg-warning overflow-auto">
            <h1>Starships </h1>
            {
                store.starships.length > 0 ? (
                    store.starships.map((starships, index) => (
                        <div className=" bg-warning " key={index} >
                            <div className="card" >
                                <div className="card-body bg-black text-light" >
                                    <h5 className="card-title" > {starships.name} </h5>
                                    < img src={`https://starwars-visualguide.com/assets/img/characters/${starships.uid}.jpg`} alt="starship imagen" />
                                </div>
                                < div className="card-body bg-secondary d-flex" >
                                    <button className="btn btn-primary btn-lg mx-4" onClick={() => handlerMoreDetails(starships.uid)}> Detalles </button>
                                    <button className="btn btn-sm border border-danger rounded" onClick={() => handlerFav(starships)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                    </button> 
                               </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay starships disponibles </p>
                )}
        </div>
    );
};

export default Starships;