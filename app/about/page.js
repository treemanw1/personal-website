import React from "react";

export default function About() {
	return (
		<div className='flex w-[45%] justify-between bg-blue-30 text-lg mt-2 pb-[10vh] leading-tight'>
			<div className="flex flex-col justify-between w-[55%] bg-green-30">
				<div className="flex flex-col">
					<p className="font-semibold">WEE NEVILLE</p>
					<p className="">Aspiring Software Engineer</p>
					<p className="">wee.neville@proton.me</p>
				</div>
				<div>
					<p className="font-semibold">ABOUT ME</p>
					<p className="">26 March 1999</p>
					<p className="">Born in Singapore</p>
				</div>
				<div>
					<p className="font-semibold">MY SKILLS</p>
					<p className="">Python</p>
					<p className="">JavaScript</p>
					<p className="">HTML & CSS</p>
					<p className="">React</p>
				</div>
				<div>
					<p className="font-semibold">LANGUAGES</p>
					<p className="">English (Native proficiency)</p>
					<p className="">Chinese (Limited proficiency)</p>
				</div>
				<div>
					<p className="font-semibold">EXPERIENCE</p>
					<p className="">Software Developer</p>
					<p className="">Empire Code | 2022</p>
				</div>
				<div>
					<p className="font-semibold">EDUCATION</p>
					<p className="">Singapore University of Technology and Design</p>
					<p className="">Computer Science and Design | 2020-2024</p>
				</div>

			</div>
			<div className="flex flex-col justify-between items-end gap-y-5 w-[45%] bg-pink-30">
				<img className="w-[60%] grayscale" src='/images/passport.jpg'></img>
				<div className="flex flex-col text-right">
					<p className="font-semibold">LINKS</p>
					<a className="hover:text-gray-500" href="/Resume_Wee_Neville.docx" download="Resume_Wee_Neville.docx" class="btn">Resume</a>
					<a className="hover:text-gray-500" target="_blank" href="https://www.instagram.com/nevillle_">Instagram</a>
					<a className="hover:text-gray-500" target="_blank" href="https://github.com/treemanw1">GitHub</a>
					<a className="hover:text-gray-500" target="_blank" href="https://www.linkedin.com/treemanw1">LinkedIn</a>
					<a className="hover:text-gray-500" target="_blank" href="https://open.spotify.com/user/21cybi2de2gqhhmevcmut7sfq?si=8739c37bf48d4f31">Spotify</a>
				</div>
			</div>
		</div>
	);
}
