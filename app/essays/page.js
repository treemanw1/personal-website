import React from "react";

import Navbar from "../components/Navbar";
import EssaySection from "../components/EssaySection";

const essays = [
	{
		title: "Caloric Expenditure And Its Impact On Body Composition",
		text: "How does body fat percentage vary with higher caloric intake and expenditure?",
		topic: "Fitness",
		date: '30/8/2023',
		img_src: "/images/shamo back.jpg",
	},
	{
		title: "Low Poly Modeling",
		text: "3D Modeling with vintage graphics.",
		topic: "Programming",
		date: '30/8/2023',
		img_src: "/images/low poly milk carton.jpg",
	},
];

export default function Essays() {

	return (
		<div className='flex flex-col w-[65%] gap-y-5 bg-blue-30 text-lg mt-2 pb-[10vh] leading-tight'>
			<p>
				Thoughts on a variety of random subjects.
			</p>
			<div className="grid grid-cols-3 grid-flow-row gap-4">
				<div className="bg-gray-300 aspect-square"></div>
				<div className="bg-gray-300 aspect-square"></div>
				<div className="bg-gray-300 aspect-square"></div>
				<div className="bg-gray-300 aspect-square"></div>
				<div className="bg-gray-300 aspect-square"></div>
				<div className="bg-gray-300 aspect-square"></div>
			</div>
		</div>

	);
}
