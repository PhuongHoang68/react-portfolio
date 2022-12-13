import React, { useState } from 'react';
import About from './components/About';
import Nav from "./components/Nav";
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';


function App() {
  const [projects] = useState([
  {  
    name: "front-end projects",
    description: "Front-end projects using HTML, CSS, React etc. showcasing my abilities"
  },
  {
    name: "back-end projects",
    description: "Back-end projects using MySQL, NoSQL, Express etc. showcasing my abilities"
  },
  {
    name: "full-stack projects",
    description: "Full-stack projects using HTML, CSS, React, MySQL, NoSQL, Express etc. showcasing my abilities"
  },
]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      projects={projects}
      setCurrentProject={setCurrentProject}
      currentProject={currentProject}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected? (
        <>
        <Portfolio currentProject={currentProject}></Portfolio>
        <About></About>
        </>
        ): (
          <ContactForm></ContactForm>
        )
        }
      </main>
    </div>
  );
}

export default App;