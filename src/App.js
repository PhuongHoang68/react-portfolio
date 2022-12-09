import React, { useState } from 'react';
import About from './components/About';
import Nav from "./components/Nav";
import Portfolio from './components/Portfolio';

function App() {
  const [projects] = useState([
  {  
    name: "front-end projects",
    description: "Front-end back-end projects using HTML, CSS, React etc. showcasing my abilities"
  },
  {
    name: "back-end projects",
    description: "Back-end back-end projects using MySQL, NoSQL, Express etc. showcasing my abilities"
  },
  {
    name: "full-stack projects",
    description: "Full-stack projects using HTML, CSS, React, MySQL, NoSQL, Express etc. showcasing my abilities"
  },
]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav
      projects={projects}
      setCurrentProject={setCurrentProject}
      currentProject={currentProject}
      ></Nav>
      <main>
        <About></About>
        <Portfolio currentProject={currentProject}></Portfolio>
      </main>
    </div>
  );
}

export default App;