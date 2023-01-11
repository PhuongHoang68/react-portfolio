import React from "react";
import Button from '@mui/material/Button';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Resume() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <section className="font-link">
            <h2 className="resume-top">Quick experience overview:</h2>
            <div id="wrapping"> 
            <div className="list"> 
	        <div> 
            <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>NoSQL</li>
                <li>GraphQL</li>
                <li>React.js</li>
                <li>Node.js</li>
            </ul>
            </div>
            </div>


            <div className="list"> 
	        <div> 
            <ul>
                <li>TDD</li>
                <li>Express.js</li>
                <li>jQuery</li>
                <li>MongoDB</li>
                <li>Restful API</li>
                <li>Apollo</li>
                <li>Git</li>
                <li>Github</li>
                <li>Heroku</li>
            </ul>
            </div>
            </div>
    
            </div>

            <Button variant="contained" className="resume" size="large">
            <a href="https://docdro.id/qnOyIE1">DOWNLOAD RESUME</a>
            </Button>

            <div className="contact">
                <h1>Contact me:</h1>
                <p>Phone: 636-541-7008</p>
                <p>Email:
                <a href="mailto:p.hoang6897@yahoo.com" className="email"> p.hoang6897@yahoo.com</a>
                </p>
            </div>
            <Particles id="tsparticles" 
        options={{
        background: {
            color: {
                value: "#black",
            },
        },
        fpsLimit: 120,
        interactivity: {
            detect_on: "window",
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
              }
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 40,
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
            },
            shape: {
                type: "circle",
                polygon: {
                  nb_sides: 5
              }
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true
      }}
      init={particlesInit} 
      loaded={particlesLoaded} 
      />
        </section>
    )
}

export default Resume;