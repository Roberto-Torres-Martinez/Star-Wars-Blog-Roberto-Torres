import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const PeopleInfo = () => {

    const { store, actions } = useContext(Context)

    const params = useParams()

    useEffect(() => {
        actions.getCharacter(params.id)
    }, []);

    

    return (
        <div className="container">
            <div className="col-12 col-md-12">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start img-big-card border border-dark-subtle" alt="..." />
                        </div>
                        <div className="col-md-8 big-card-body-container">
                            <div className="big-card-info">
                                <h5 className="big-card-title mt-2">{store.infoCharacter?.name}</h5>
                                <p className="big-card-info"><b>Gender: </b>{store.infoCharacter?.gender}</p>
                                <p className="big-card-info"><b>Eye Color: </b>{store.infoCharacter?.eye_color}</p>
                                <p className="big-card-info"><b>Hair Color: </b>{store.infoCharacter?.hair_color}</p>
                                <p className="big-card-info"><b>Birth Year: </b>{store.infoCharacter?.birth_year}</p>
                                <p className="big-card-info"><b>Height: </b>{store.infoCharacter?.height}cm</p>
                                <p className="big-card-info"><b>Mass: </b>{store.infoCharacter?.mass}kg</p>
                                <p className="big-card-info"><b>Skin Color: </b>{store.infoCharacter?.skin_color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}