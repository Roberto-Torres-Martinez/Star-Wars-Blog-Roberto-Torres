import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = ({ vehicle }) => {

    const { actions } = useContext(Context)

    const [infoVehicles, setInfoVehicles] = useState({})

    const urlVehicles = vehicle.url

    const uidVehicles = vehicle.uid

    const getVehicles = async () => {
        try {
            const response = await fetch(`${urlVehicles}`)

            const data = await response.json()

            setInfoVehicles(data.result.properties)

        } catch (error) {
            console.error("Error getting vehicles from API:");
        }
    }

    useEffect(() => {
        getVehicles();
    }, []);

    return (
        <div className="container page-content">
            <div className="card mt-5" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uidVehicles}.jpg`} className="card-img-top border border-dark-subtle" alt="..." />

                <div className="card-body-main">
                    <h5 className="card-title mb-3">{infoVehicles.name}</h5>

                    <p className="model-vehicle small-card-info"><b>Model: </b>{infoVehicles.model}</p>
                    <p className="small-card-info"><b>Max Speed: </b>{infoVehicles.max_atmosphering_speed} km/h</p>
                    <p className="small-card-info"><b>Class: </b>{infoVehicles.vehicle_class}</p>
                    <div className="card-buttons d-flex">
                        <Link to={`/vehiclesInfo/${uidVehicles}`}>
                            <a href="#" className="btn btn-outline-info ms-2 mb-2">Learn More!</a>
                        </Link>
                        <button href="#" className="btn btn-outline-warning ms-auto me-2 mb-2"><i onClick={() => { actions.addFavorite(infoVehicles.name) }} className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

