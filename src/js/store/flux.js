const getState = ({ getStore, getActions, setStore }) => ({
	store: {
		planets: [],
		detailPlanet: [],
		peoples: [],
		detailPeople: [],
		starhsips:[],
		detailStarhsips:[],
		currentFav: [],
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
			fetch("https://www.swapi.tech/api/starhsips")
				.then(res => res.json())
				.then(data => setStore({ ...getStore(), peoples: data.results }))
				.catch(err => console.error(err));
				console.log("estos es el store", store.peoples);
		}
			catch (error) {
				console.error(error);
			}
		},


		// toggleFavorite: (planet) => {
		// 	const store = getStore();
		// 	const isFavorite = store.currentFav.some(fav => fav.uid === planet.uid);

		// 	setStore({
		// 		...store,
		// 		currentFav: isFavorite
		// 			? store.currentFav.filter(fav => fav.uid !== planet.uid)
		// 			: [...store.currentFav, planet]
		// 	});
		// }
	}
});

export default getState;
