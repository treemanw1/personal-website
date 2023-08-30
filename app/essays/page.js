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
		<div className="flex flex-col gap-y-3">
			{essays.map((data) => {
				return <EssaySection data={data} />;
			})}
		</div>
	);
}
