import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {AiTwotonePhone} from "react-icons/ai";
function Footer() {
    return (
        <footer>
            <div style={{display: "flex"}}>
            
                <div style={{width: "100%"}}>
                    
                    <div style={{display: "flex", justifyContent: "center"}}>

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

                    <a href="mailto:peyton.hoang97@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                    <h3 className="icon"><AiOutlineMail size="3rem"/></h3>
                    </a>

                    <a href="tel:909-654-4515"
                        target="_blank"
                        rel="noreferrer"
                    >
                    <h3 className="icon">
                        <AiTwotonePhone size="3rem"
                        /> 
                        </h3>
                    </a>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;