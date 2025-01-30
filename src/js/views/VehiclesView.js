import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Vehicles } from "../component/Vehicles";

export const VehiclesView = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getVehicles();
    }, []);
    return (
        <div className="container-fluid bg-black">
            <div className="row justify-content-center">
                {store.vehicles.map((vehicle, index) => {
                    return (
                        <div key={index} className="col-12 col-md-2 mt-3">
                            <Vehicles vehicle={vehicle} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};