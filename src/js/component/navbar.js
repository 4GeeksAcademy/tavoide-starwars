import React, { useState, useSyncExternalStore, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";




export const Navbar = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/');
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={goToAboutPage}><h2>STAR WARS</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                   
                    <div className="ms-auto dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Favoritos <span className="badge bg-secondary">{store.currentFav.length}</span>
                        </button>
                        <ul className="dropdown-menu">
                            {store.currentFav.length > 0 ? (
                                store.currentFav.map((item, index) => (
                                    <li key={index} className="d-flex justify-content-between px-3">
                                        <span>{item}</span>
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => actions.toggleFavorite(planet)}
                                        >
                                            ❌
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li><span className="dropdown-item text-muted">No hay favoritos</span></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

