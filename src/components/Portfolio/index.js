import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "../PhotoList";


function Portfolio({currentProject}) {
    const { name, description } = currentProject;
    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList project={currentProject.name}/>
        </section>
    );
}

export default Portfolio;