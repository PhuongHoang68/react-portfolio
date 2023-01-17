import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkedIn from "../../assets/linkedIn/linkedIn.jpg";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div>
        <Container className="home">
            <Row>
                <Col sm={8} className="welcome">
                    <h1 style={{fontSize: "50px"}}>Hi, I'm Phuong Hoang.</h1>
                    <br />
                    <h2 style={{fontSize: "20px"}}>Welcome to my portfolio page. </h2>
                    <br />
                    <h2 style={{fontSize: "25px"}}> I'm a Full-Stack Web Developer with a Bachelors in Marketing and Biology, and a Bootcamp Graduate from WASHU! Motivated professional with an extensive record of tearmwork and leadership experience. Bi-lingual and a lifetime learner. I'm seeking a full-time position as a developer. Please check-out my projects& resume above! </h2>
                </Col>
                <Col sm={4}>
                    <img 
                    src={LinkedIn} 
                    className="my-2 linkedin" 
                    style={{ width: "300px"}} 
                    alt="linkedIn photo"/>
                </Col>
            </Row>
        </Container>
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
                    default: "out",
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
        </div>
    )
}

export default Home;