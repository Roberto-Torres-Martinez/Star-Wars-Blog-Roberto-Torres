import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Planets } from "../component/Planets";

export const PlanetsView = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPlanets();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {store.planets.map((planet, index) => {
                    return (
                        <div key={index} className="col-12 col-md-2 mt-3">
                            <Planets planet={planet} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};