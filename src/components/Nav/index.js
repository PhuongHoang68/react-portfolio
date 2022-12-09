import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        projects = [],
        setCurrentProject,
        currentProject,
      } = props;

    useEffect(()=> {
        document.title = capitalizeFirstLetter(currentProject.name);
    }, [currentProject]
    );

    return (
        <header className="flex-row px-1"> 
            <h2>
                <a href="/">
                Phuong's Personal Portfolio
                </a>
            </h2>
            <nav className="">
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>

                    {projects.map((project)=> (
                        <li className={`mx-1 ${
                            currentProject.name === project.name && "navActive"
                        }`} 
                        key={project.name}
                        >
                            <span
                            onClick={()=> {
                                setCurrentProject(project)
                            }}
                            >
                                {capitalizeFirstLetter(project.name)}
                            </span>
                        </li>
                    ))}

                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;