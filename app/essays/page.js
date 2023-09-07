import React from "react";

import EssaySection from "../components/EssaySection";
import Link from "next/link";

const essays = [
	{
		title: "Caloric Expenditure And Its Impact On Body Composition",
		text: "How does body fat percentage vary with higher caloric intake and expenditure?",
		topic: "Fitness",
		date: '6 October 2023',
		img_src: "/images/shamo_back.jpg",
	},
	{
		title: "Low Poly Modeling",
		text: "3D Modeling with vintage graphics.",
		topic: "Programming",
		date: '30 October 2023',
		img_src: "/images/lowpoly_milk.jpg",
	},
];

export default function Essays() {

	return (
		<>
			{/* Landscape */}
			<div className='portrait:hidden flex flex-col w-[45%] gap-y-5 bg-blue-30 text-lg mt-2 pb-[10vh] leading-tight'>
				<p>
					Thoughts on a variety of random subjects.
				</p>
				<div className="grid grid-cols-1 gap-y-4">
					{essays.map(e => {
						return (
							<EssaySection key={e.title} data={e}></EssaySection>
						)
					})}
				</div>
			</div>
			{/* Portrait */}
			<div className='landscape:hidden flex flex-col items-center w-full p-[5%] gap-y-5 text-lg leading-tight'>
				<p>
					Thoughts on a variety of random subjects.
				</p>
				<div className="grid grid-cols-1 gap-y-4 ">
					{essays.map(e => {
						return (
							<EssaySection data={e}></EssaySection>
						)
					})}
				</div>
			</div>
		</>
	);
}
