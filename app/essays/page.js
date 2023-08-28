import React from "react";
import Navbar from "../components/Navbar";
import EssaySection from "../components/EssaySection";

const essays = [
	{
		title: "21st Century Sisyphus",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		topic: "Life",
		img_src: "/images/sisyphus.jpg",
	},
	{
		title:"Title",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		topic: "Topic",
		img_src: "/images/samsa iphone.jpg"
	}
];

export default function Essays() {
	return (
		<div className="flex justify-center bg-gray-100 min-h-screen">
			<div className="flex flex-col mt-[10vh] gap-y-3 w-[30%]">
				<h1 className="text-4xl font-bold">Essays</h1>
				<Navbar />
				<div className="flex flex-col gap-y-5 mb-10">
					{essays.map(data => {
						return (
							<EssaySection data={data}/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
