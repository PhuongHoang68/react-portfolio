import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        setPageSelected,
        pageSelected
      } = props;


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

                    <li className="mx-2">
                        <a href="#front" onClick={()=> setPageSelected("Front-end")}>Front-end Projects</a>
                    </li>

                    <li className="mx-2">
                        <a href="#back" onClick={()=> setPageSelected("Back-end")}>Back-end Projects</a>
                    </li>

                    <li className="mx-2">
                        <a href="#full" onClick={()=> setPageSelected("Full-stack")}>Full-stack Projects</a>
                    </li>

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