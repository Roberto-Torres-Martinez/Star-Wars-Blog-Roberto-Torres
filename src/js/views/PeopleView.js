import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { People } from "../component/People";

export const PeopleView = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPeople();
    }, []);


    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {store.people.map((character, index) => {
                    return (
                        <div key={index} className="col-12 col-md-2 mt-3">
                            <People character={character} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};