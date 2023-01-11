import React, { useState } from 'react';
import {Routes, Route} from "react-router";
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import MyAppBar from "./components/BurgerNav"
function App() {
	return (
		<div>
			<MyAppBar />
			<main className="pagewrap">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="Home" element={<Home />} />
				<Route path="Projects" element={<Projects />} />
				<Route path="Resume" element={<Resume />} />
			</Routes>
			</main>
			<div className="app">
			<Footer />
			</div>
		</div>
	);
}

export default App;