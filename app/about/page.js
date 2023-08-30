import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
	return (
		<>
			<h1 className="text-4xl font-bold">About Me</h1>
			<Navbar />
			<p>Hello and welcome to my website!</p>
			<div className="flex justify-center">
				<img className="" src='/images/me hogwarts.jpg' alt='Picture of me'/>
			</div>

			<p>
				I am studying Computer Science at SUTD, and am an aspiring
				fullstack web developer.
			</p>
			<p>
				My interests include martial arts, indie films, and on
				occasion politics and history.
			</p>
			<p>
				This site is meant to be a space to share all things
				me-related: my thoughts, opinions, projects, etc..
			</p>
			<p>Hope you enjoy your stay!</p>
		</>
	);
}
