import "./globals.css";

import Navbar from "./components/Navbar";
import { Providers } from "./providers";

export const metadata = {
	title: "Wee's World",
	description: "Personal website of Neville Wee.",
};

export default function RootLayout({ children }) {

	return (
		<html className="overflow-y-scroll" lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&family=Press+Start+2P&family=Roboto&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Providers>
					<main className="m-0 p-0 box-border font-roboto dark:text-white text-black dark:bg-gray-950 bg-gray-100">
						{/* Landscape */}
						<div className="portrait:hidden flex flex-col min-h-screen">
							<Navbar/>
							<div className="flex flex-1 justify-center h-full w-full">
								{children}
							</div>
						</div>
						{/* Portrait */}
						<div className="landscape:hidden flex flex-col min-h-screen">
							<Navbar/>
							{children}
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
