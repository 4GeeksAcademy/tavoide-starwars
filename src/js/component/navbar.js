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
        <div >
			<nav className="navbar mb-3 text-center fixed-top " style={{
				background: 'black', height: '60px'
			}}>
				<Link to="/">
					<img src="https://framerusercontent.com/images/HVzApGKkH6YM1vUO9zOo5lJBC4.jpeg" className="ms-3" style={{ height: "50px", width: "90px" }} />
				</Link>
				<div className="dropdown me-3">
					<button
						className="btn btn-warning dropdown-toggle text-dark"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Your force
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{store.favorites.length}
						</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">

						{store.favorites.length === 0 ? (
							<li className="dropdown-item text-dark">No hay favoritos</li>
						) : (
							store.favorites.map((fav) => (
								<li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
									<span>{fav.name}</span>
									<button
										className="btn btn-sm btn-danger ms-2"
										onClick={() => actions.removeFromFavorites(fav.uid)}
									> X </button>
								</li>
							))
						)}
					</ul>
				</div>
			</nav>

		</div >
    );
};

