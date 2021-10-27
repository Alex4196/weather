






export function removeCity(id) {
    return { type: "REMOVE_CITY", payload: id};
  }

export function addCity(city) {
    return function(dispatch) {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81f64b63e006e8b70d30f7362c911505&units=metric`)
        .then(city => city.json())
        .then(json => {
          dispatch({ type: "ADD_CITY", payload: json });
        });
    };
  }