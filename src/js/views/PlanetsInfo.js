import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const PlanetsInfo = () => {

    const { store, actions } = useContext(Context)

    const params = useParams()

    useEffect(() => {
        actions.getPlanetsInfo(params.id)      
    }, []);   

    return (
        <div className="container">
            <div className="col-12 col-md-12">
                <div className="card card-info-planets mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={params.id == 1 ? `https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357` : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start img-big-card border border-dark-subtle" alt="..." />
                        </div>
                        <div className="col-md-8 big-card-body-container">
                            <div className="big-card-info-planets">
                                <h5 className="big-card-title-planets mt-2">{store.infoPlanets?.name}</h5>
                                <p><b>Diameter: </b>{store.infoPlanets?.diameter} km</p>
                                <p><b>Population: </b>{store.infoPlanets?.population}</p>
                                <p><b>Rotation Period: </b>{store.infoPlanets?.rotation_period} days</p>
                                <p><b>Orbital Period: </b>{store.infoPlanets?.orbital_period} days</p>
                                <p><b>Gravity: </b>{store.infoPlanets?.gravity} Standard</p>
                                <p><b>Climate: </b>{store.infoPlanets?.climate}</p>
                                <p><b>Terrain: </b>{store.infoPlanets?.terrain}</p>
                                <p><b>Surface Water: </b>{store.infoPlanets?.surface_water}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}