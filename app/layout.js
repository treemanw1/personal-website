import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
	title: "Wee's World",
	description: "Personal website of Mr. Neville Wee.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&family=Press+Start+2P&family=Roboto&display=swap" rel="stylesheet"/>
			</head>
			<body>
				<main className="m-0 p-0 box-border font-roboto text-black">
					{/* <Navbar /> */}
					{children}
				</main>
			</body>
		</html>
	);
}
