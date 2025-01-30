const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			infoCharacter: {},
			infoPlanets: {},
			infoVehicles: {},
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/")

					const data = await response.json()

					setStore({ people: data.results });

				} catch (error) {
					console.error("Error getting people from API:");
				}
			},

			getCharacter: async (urlCharacter) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${urlCharacter}`)

					const data = await response.json()

					setStore({ infoCharacter: data.result.properties })

				} catch (error) {
					console.error("Error getting people from API:");
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					console.log(response);

					const data = await response.json()
					console.log(data);
					setStore({ planets: data.results });

				} catch (error) {
					console.error("Error getting planets from API:");
				}
			},

			getPlanetsInfo: async (urlPlanets) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${urlPlanets}`)

					const data = await response.json()

					setStore({ infoPlanets: data.result.properties })

				} catch (error) {
					console.error("Error getting planets from API:");
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/")

					const data = await response.json()

					setStore({ vehicles: data.results });

				} catch (error) {
					console.error("Error getting vehicles from API:");
				}
			},

			getVehiclesInfo: async (urlVehicles) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${urlVehicles}`)

					const data = await response.json()

					setStore({ infoVehicles: data.result.properties })

				} catch (error) {
					console.error("Error getting vehicles from API:");
				}
			},

			addFavorite: (favs) => {
				let favList = [...getStore().favorites]
				favList.push(favs);			
				setStore({ favorites: favList });
			},

			removeFavorite: (remove) => {
				let favList = getStore().favorites;

				const newFavList = favList.filter(fav => fav !== remove);
			
				setStore({ favorites: newFavList });
			},

		}
	};
};

export default getState;
