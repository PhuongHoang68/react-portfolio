import Weather from "../../assets/linkedIn/weather-dashboard.jpg"
import Scheduler from "../../assets/linkedIn/scheduler.jpg"
import Quiz from "../../assets/linkedIn/quiz.jpg"
import Hotel from "../../assets/linkedIn/hotel.jpg"
import Book from "../../assets/linkedIn/book.jpg"
import ProjectCard from "../Card"
import BackCard from "../BackCard"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Projects() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div>
      <h1 style={{fontSize: "20px"}}> Front-end projects:</h1>
    <div style={{display: "flex", gap: "10px", justifyContent: "center", marginTop: "15px", marginBottom: "100px"}}>
      <ProjectCard 
      img={Weather}
      title= "Weather Forecast App"
      text= {`A weather app where you could input a city name, and current weather forecast would be fetched, in addition to the next 5-days forecast.

      Technologies used: Javascript, HTML, CSS`}
      link= "https://github.com/PhuongHoang68/Weather-dashboard"     
      />
      <ProjectCard 
      img={Scheduler}
      title= "Work Day Scheduler"
      text= {`Each block of time is one hour, and user can input their task for that hour in there. The hours will be color-coded, grayed out when past, red when present, and green for future.

      Technologies used: HTML, CSS, JQuery, Moment.js, JS`}
      link= "https://github.com/PhuongHoang68/work-day-scheduler"     
      />
      <ProjectCard 
      img={Quiz}
      title= "Coding Quiz"
      text= {`An online quiz students could take to prepare for their tech interviews. Students get 75 seconds to answer 5 questions. Correct answers will be totaled and points displayed after.

      Technologies used: Javascript, HTML, CSS`}
      link= "https://github.com/PhuongHoang68/Web-API-code-quiz"     
      />
    </div>

    <h1 style={{fontSize: "20px"}}> Full-stack projects:</h1>
    <div style={{display: "flex", gap: "10px", justifyContent: "center", marginTop: "15px", marginBottom: "100px"}}>
      <ProjectCard 
      img={Hotel}
      title= "The Sun Hotel"
      text= {`MERN full-stack application that allows The Sun Hotel's customers to login and book a reservation, as well as to learn more about the hotel.

      Technologies used: MongoDB, Express, React, Node, Heroku`}
      link= "https://github.com/PhuongHoang68/MERN-the-sun-hotel"     
      />
      <ProjectCard 
      img={Book}
      title= "Book Lovers United"
      text= {`A book search website powered by Google Books API. This site allows users to look up books, save it to their profile, and follow their link to Google Books site

      Technologies used: React, CSS, Express.js, Apollo Server to run GraphQL queries and mutations, Json Web Token for auth`}
      link= "https://github.com/PhuongHoang68/MERN-book-club-engine"     
      />
    </div>

    <h1 style={{fontSize: "20px"}}> Back-end projects:</h1>
    <div style={{display: "flex", gap: "10px", justifyContent: "center", marginTop: "15px", marginBottom: "100px"}}>
      <BackCard 
      title= "MySQL Employee Tracker"
      text= {`A command-line app for easy tracking of a company's employees. Users could view department/roles/employees table. They could add department, role, or employees. They could also update employee roles.

      Technologies used: MySQL, Node.JS, and Inquirer `}
      link= "https://github.com/PhuongHoang68/Employee-Tracker"     
      />
      <BackCard 
      title= "E-Commerce Back End"
      text= {`An E-commerce site's back-end with API routes for GET, POST, PUT, DELETE for products, categories, and tags.
      Technologies used: Express.js, Sequelize, MySQL`}
      link= "https://github.com/PhuongHoang68/E-Commerce-Back-End"     
      />
      <BackCard 
      title= "NoSQL Social Media App"
      text= {`APIs built for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.
      Technologies used: Javascript, Express.js for routing, MongoDB database, and Mongoose ODM.`}
      link= "https://github.com/PhuongHoang68/NoSQL-network-API"     
      />
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
    </div>
  )
}

export default Projects;