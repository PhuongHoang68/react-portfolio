import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import FullStack from './components/FullStack';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

	const [pageSelected, setPageSelected] = useState('About');

	const handleClick = (pageState) => {
		setPageSelected(pageState);
	};
	console.log(pageSelected);
	return (
		<div>
			<Nav
				pageSelected={pageSelected}
				setPageSelected={setPageSelected}
			></Nav>
			<main>
				{(() => {
					switch (pageSelected) {
						case 'About':
							return <About handleClick={handleClick} />;
						case 'Front-end':
							return <FrontEnd handleClick={handleClick} />;
						case 'Back-end':
							return <BackEnd handleClick={handleClick} />;
						case 'Full-stack':
							return <FullStack handleClick={handleClick} />;
						case 'Contact':
							return <ContactForm handleClick={handleClick} />;
						case 'Resume':
							return <Resume handleClick={handleClick} />;
						default:
							return (
								<About
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