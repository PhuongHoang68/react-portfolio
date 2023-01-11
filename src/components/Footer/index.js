import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

function Footer() {
    return (
        <footer className="icon-link">


            <a href="https://github.com/PhuongHoang68"
            target="_blank"
            rel="noreferrer"
            >
                <h3 className="icon"><AiFillGithub size="3rem"/></h3>
            </a>

            <a href="https://www.linkedin.com/in/phuong-hoang-a0b4901a5/"
            target="_blank"
            rel="noreferrer"
            >
                <h3 className="icon"><AiFillLinkedin size="3rem"/></h3>
            </a>

        </footer>
    )
}

export default Footer;