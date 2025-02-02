import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const VehiclesInfo = () => {

    const { store, actions } = useContext(Context)

    const params = useParams()

    useEffect(() => {
        actions.getVehiclesInfo(params.id)
    }, []);

    return (
        <div className="container">
            <div className="col-12 col-md-12">
                <div className="card card-info-vehicles mb-3">
                    <div className="row g-0">
                        <div className="col-md-4 big-card-container">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start img-big-card border border-dark-subtle img-vehicle-detail" alt="..." />
                        </div>
                        <div className="col-md-8 big-card-body-container">
                            <div className="big-card-info-planets">
                                <h5 className="model-vehicle big-card-title-planets"><b></b>{store.infoVehicles?.model}</h5>
                                <p><b>Max Speed: </b>{store.infoVehicles?.max_atmosphering_speed} km/h</p>
                                <p><b>Class: </b>{store.infoVehicles?.vehicle_class}</p>
                                <p><b>Manufacturer: </b>{store.infoVehicles?.manufacturer}</p>
                                <p><b>Length: </b>{store.infoVehicles["length"]} m</p>
                                <p><b>Cost: </b>{store.infoVehicles?.cost_in_credits} Credits</p>
                                <p><b>Crew: </b>{store.infoVehicles?.crew}</p>
                                <p><b>Passengers: </b>{store.infoVehicles?.passengers}</p>
                                <p><b>Cargo Capacity: </b>{store.infoVehicles?.cargo_capacity} kg</p>
                                <p><b>Consumables: </b>{store.infoVehicles?.consumables}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}