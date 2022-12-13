import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        projects = [],
        setCurrentProject,
        currentProject,
        setContactSelected,
        contactSelected
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
                        <a href="#about" onClick={()=> setContactSelected(false)}>About Me</a>
                    </li>

                    {projects.map((project)=> (
                        <li className={`mx-1 ${
                            currentProject.name === project.name && !contactSelected && "navActive"
                        }`} 
                        key={project.name}
                        >
                            <span
                            onClick={()=> {
                                setCurrentProject(project);
                                setContactSelected(false);
                            }}
                            >
                                {capitalizeFirstLetter(project.name)}
                            </span>
                        </li>
                    ))}

                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && "navActive"}`}>
                        <a href="#contact">
                            <span onClick={() => setContactSelected(true)}>Contact Me</span>
                            </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;