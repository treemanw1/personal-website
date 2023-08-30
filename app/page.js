'use client'

import Navbar from './components/Navbar';
import CurrentTime from './components/CurrentTime';

export default function Home() {
	return (
		<>
				<h1 className="text-black text-4xl font-bold">Neville Wee</h1>
				<Navbar/>
				<img src='/images/vagabond long.jpg' className=''/>
				<div className='text-black italic whitespace-nowrap inline-block'>
					Time in Singapore - <CurrentTime/> SGT
				</div>
		</>
	);
}
