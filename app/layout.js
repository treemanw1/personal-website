import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from './components/Navbar';

export const metadata = {
	title: "Wee's World",
	description: "Personal website of Mr. Neville Wee.",
};

export default function RootLayout({ children }) {
	return (
		<html className="overflow-y-scroll" lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&family=Press+Start+2P&family=Roboto&display=swap" rel="stylesheet"/>
			</head>
			<body>
				<main className="m-0 p-0 box-border font-roboto text-black bg-gray-100">
					<div className="flex flex-col min-h-screen bg-green">
						<Navbar/>
						<div className="flex flex-1 justify-center bg-blue h-full w-full">
							{children}
						</div>
					</div>
					{/* {children} */}
				</main>
			</body>
		</html>
	);
}
