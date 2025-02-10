const getState = ({ getStore, getActions, setStore }) => ({
	store: {
		planets: [],
		detailPlanet: [],
		peoples: [],
		detailPeople: [],
		starships:[],
		detailStarships:[],
		currentFav: [],
		favorites:[],
	},
	actions: {
		fetchPlanets: async () => {
			try {

				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ ...getStore(), planets: data.results }))
					.catch(err => console.error(err));

				console.log("estos es el store", store.planets);
			} catch (error) {
				console.error("error al hacer fetch de planetas", error);
			}
		},

		getDetailPlanets: async (id) => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				if (!response.ok) {
					throw new Error("No sirvió");
				}
				const data = await response.json();
				console.log("esta es la otra data de planets", data);

				const store = getStore();
				setStore({ ...store, planetProperties: data.result });
				console.log(data);

			} catch (error) {
				console.error(error);
			}
		},

		fetchPeoples: async () => {
			try{
			fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({ ...getStore(), peoples: data.results }))
				.catch(err => console.error(err));
				console.log("estos es el store", store.peoples);
		}
			catch (error) {
				console.error(error);
			}
		},

		getDetailPeoples: async (id) => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if (!response.ok) {
					throw new Error("No sirvió");
				}
				const data = await response.json();
				console.log("esta es la otra data de people", data);

				const store = getStore();
				setStore({ ...store, peopleProperties: data.result });
				console.log(data);

			} catch (error) {
				console.error(error);
			}
		},

		fetchStarships: async () => {
			try{
			fetch("https://www.swapi.tech/api/starships")
				.then(res => res.json())
				.then(data => setStore({ ...getStore(), starships: data.results }))
				.catch(err => console.error(err));
				console.log("estos es el store", store.starships);
		}
			catch (error) {
				console.error(error);
			}
		},

		getDetailStarships: async (id) => {
			try {
				const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
				if (!response.ok) {
					throw new Error("No sirvió");
				}
				const data = await response.json();
				console.log("esta es la otra data de starship", data);

				const store = getStore();
				setStore({ ...store, starshipProperties: data.result });
				console.log(data);

			} catch (error) {
				console.error(error);
			}
		},

		addToFavorites: (item) => {
			const store = getStore();
			const exists = store.favorites.some((fav) => fav.uid === item.uid);
			if (!exists) {
				setStore({ favorites: [...store.favorites, item] });
			}
		},
		removeFromFavorites: (uid) => {
			const store = getStore();
			const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid);
			setStore({ favorites: updatedFavorites });
		},
	}
});

export default getState;
