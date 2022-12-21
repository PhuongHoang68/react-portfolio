import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	const [projects] = useState([
		{
			name: 'front-end projects',
			description:
				'Front-end projects using HTML, CSS, React etc. showcasing my abilities',
		},
		{
			name: 'back-end projects',
			description:
				'Back-end projects using MySQL, NoSQL, Express etc. showcasing my abilities',
		},
		{
			name: 'full-stack projects',
			description:
				'Full-stack projects using HTML, CSS, React, MySQL, NoSQL, Express etc. showcasing my abilities',
		},
	]);

	const [currentProject, setCurrentProject] = useState(projects[0]);

	const [pageSelected, setPageSelected] = useState('About');

	const handleClick = (pageState) => {
		setPageSelected(pageState);
	};
	console.log(pageSelected);
	return (
		<div>
			<Nav
				projects={projects}
				setCurrentProject={setCurrentProject}
				currentProject={currentProject}
				pageSelected={pageSelected}
				setPageSelected={setPageSelected}
			></Nav>
			<main>
				{(() => {
					switch (pageSelected) {
						case 'About':
							return <About handleClick={handleClick} />;
						case 'Contact':
							return <ContactForm handleClick={handleClick} />;
						case 'Resume':
							return <Resume handleClick={handleClick} />;
						default:
							return (
								<Portfolio
									handleClick={handleClick}
									currentProject={currentProject}
								/>
							);
					}
				})()}
			</main>
			<Footer />
		</div>
	);
}

export default App;