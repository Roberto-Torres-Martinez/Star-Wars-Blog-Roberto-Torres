import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = ({ planet }) => {

    const { actions } = useContext(Context)

    const [infoPlanets, setInfoPlanets] = useState({})

    const urlPlanets = planet.url

    const uidPlanets = planet.uid

    const getPlanets = async () => {
        try {
            const response = await fetch(`${urlPlanets}`)

            const data = await response.json()

            setInfoPlanets(data.result.properties)

        } catch (error) {
            console.error("Error getting planets from API:");
        }
    }

    useEffect(() => {
        getPlanets();
    }, []);

    return (
        <div className="container page-content">
            <div className="card mt-5" style={{ width: '18rem' }}>
                <img src={uidPlanets == 1 ? `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357` : `https://starwars-visualguide.com/assets/img/planets/${uidPlanets}.jpg`} className="card-img-top border border-dark-subtle" alt="..." />

                <div className="card-body-main">
                    <h5 className="card-title mb-3">{infoPlanets.name}</h5>

                    <p className="small-card-info"><b>Diameter: </b>{infoPlanets.diameter} km</p>
                    <p className="small-card-info"><b>Population: </b>{infoPlanets.population}</p>
                    <p className="small-card-info"><b>Rotation Period: </b>{infoPlanets.rotation_period} days</p>
                    <div className="card-buttons d-flex">
                        <Link to={`/planetsInfo/${uidPlanets}`}>
                            <button href="#" className="btn btn-outline-info ms-2 mb-2">Learn More!</button>
                        </Link>
                        <button href="#" className="btn btn-outline-warning ms-auto me-2 mb-2"><i onClick={() => { actions.addFavorite(infoPlanets.name) }} className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};