import React from "react";

import styles from "./Cards.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { removeCity } from "../actions";



export default function Cards() {

    const dispatch = useDispatch();

    const cities = useSelector(state => state);

    function handleClose(id) {
        dispatch(removeCity(id));
    }

    return (
        <div className={styles.cards}>
            {cities && cities.map((city) => (
                <div   key={city.id} className={styles.caja}>

                    <button className={styles.boton} onClick={() => handleClose(city.id)}>

                        X

                    </button>

                    <h1 className={styles.cityName}>{city.name}</h1>

                    <div className={styles.interior}>
                        
                        <div className={styles.min}>

                            <span>Min</span>

                            <span className={styles.interior}>{Math.round(city.main.temp_min)}°</span>

                        </div>

                        <div className={styles.max}>

                            <span>Max</span>

                            <span className={styles.interior}>{Math.round(city.main.temp_max)}°</span>

                        </div>

                    </div>
                    <div className={styles.icon}>
                    
                    <img
                        src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                        alt="Icono del clima"
                        
                    />
                    </div>

                </div>
            ))}
            {cities.length === 0? <h1></h1>: null}
        </div>
    );
}

