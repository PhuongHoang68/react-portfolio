import Weather from "../../assets/linkedIn/weather-dashboard.jpg"
import Scheduler from "../../assets/linkedIn/scheduler.jpg"
import Quiz from "../../assets/linkedIn/quiz.jpg"
import Hotel from "../../assets/linkedIn/hotel.jpg"
import Book from "../../assets/linkedIn/book.jpg"
import ProjectCard from "../Card"
import BackCard from "../BackCard"

function Projects() {
  return (
    <div>
      <h1> Front-end projects:</h1>
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
      text= {`Each block of time is one hour, and user can input their task for that hour in there. They could save that task. The hours will be color-coded, grayed out when past, red when present, and green for future.

      Technologies used: HTML, CSS, JQuery, Moment.js, Javascript`}
      link= "https://github.com/PhuongHoang68/work-day-scheduler"     
      />
      <ProjectCard 
      img={Quiz}
      title= "Coding Quiz"
      text= {`An online quiz tech students could take to prepare for their tech interviews. You will have 75 seconds to answer 5 questions. The timer counter will be displayed top right of the screen. When you get an answer wrong, the quiz will display the correct answer, and the timer will be subtracted by 10 seconds. By the end, your score is totaled. You will be asked to put in your initials, and your initials& score will be saved on the score board

      Technologies used: Javascript, HTML, CSS`}
      link= "https://github.com/PhuongHoang68/Web-API-code-quiz"     
      />
    </div>

    <h1> Full-stack projects:</h1>
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

    <h1> Back-end projects:</h1>
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
    </div>
  )
}

export default Projects;