import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        projects = [],
        setCurrentProject,
        currentProject,
        setPageSelected,
        pageSelected
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
                        <a href="#about" onClick={()=> setPageSelected("About")}>About Me</a>
                    </li>

                    {projects.map((project)=> (
                        <li className={`mx-1 ${
                            currentProject.name === project.name && !pageSelected && "navActive"
                        }`} 
                        key={project.name}
                        >
                            <span
                            onClick={()=> {
                                setCurrentProject(project);
                                setPageSelected(`${project.name}`);
                            }}
                            >
                                {capitalizeFirstLetter(project.name)}
                            </span>
                        </li>
                    ))}

                    <li className="mx-2">
                        <a href="#resume" onClick={()=> setPageSelected("Resume")}>Resume</a>
                    </li>
                    <li className={`mx-2 ${pageSelected && "navActive"}`}>
                        <a href="#contact">
                            <span onClick={() => setPageSelected("Contact")}>Contact Me</span>
                            </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;