import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
	return (
		<div className="flex justify-center bg-gray-100 min-h-screen">
			<div className="flex flex-col mt-[10vh] gap-y-3 w-[30%]">
				<h1 className="text-4xl font-bold">About Me</h1>
				<Navbar />
				<p>This is Neville, welcome to my website.</p>
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
			</div>
		</div>
	);
}
