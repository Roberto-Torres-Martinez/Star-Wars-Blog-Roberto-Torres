import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = ({ character }) => {

    const { actions } = useContext(Context)

    const [infoPeople, setInfopeople] = useState({})

    const urlCharacter = character.url

    const uidCharacter = character.uid

    const getPeople = async () => {
        try {
            const response = await fetch(`${urlCharacter}`)

            const data = await response.json()

            setInfopeople(data.result.properties)

        } catch (error) {
            console.error("Error getting people from API:");
        }
    }


    useEffect(() => {
        getPeople();
    }, []);

    return (
        <div className="container page-content">
            <div className="card small-card" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${uidCharacter}.jpg`} className="card-img-top border border-dark-subtle" alt="..." />

                <div className="card-body-main">
                    <h5 className="card-title mb-3">{infoPeople.name}</h5>

                    <p className="small-card-info"><b>Gender: </b>{infoPeople?.gender}</p>
                    <p className="small-card-info"><b>Eye Color: </b>{infoPeople?.eye_color}</p>
                    <p className="small-card-info"><b>Hair Color: </b>{infoPeople?.hair_color}</p>
                    <div className="card-buttons d-flex">
                        <Link to={`/peopleInfo/${uidCharacter}`}>
                            <button className="btn btn-outline-info ms-2 mb-2">Learn More!</button>
                        </Link>
                        <button href="#" className="btn btn-outline-warning ms-auto me-2 mb-2"><i onClick={() => { actions.addFavorite(infoPeople.name) }} className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};