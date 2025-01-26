const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: []

		},
		actions: {
			fetchPlanets: async (page = 1) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=10`);
					const data = response.json();
					setStore({...getStore(), planets: data.results})
				} catch (error) {
					console.error("error al hacer fetch de planetas", error);
				}
			},

			fetchPeople: async (page = 1) => {
				try {
					const response = await fetch( `https://www.swapi.tech/api/people?page=${page}&limit=10`)
					const data = response.json();
					setStore({...getStore(), people: response.results})
				} catch (error) {
					console.error("error al hacer fetch de personas", error)
				}
			},



		}
	};
};

export default getState;
