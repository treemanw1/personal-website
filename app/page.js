'use client'

import Navbar from './components/Navbar';
import CurrentTime from './components/CurrentTime';

export default function Home() {
	return (
		<div className='flex flex-col w-[45%]'>
				<img className='mt-10' src='/images/vagabond long.jpg'/>
				<div className='text-black italic whitespace-nowrap inline-block'>
					Time in Singapore - <CurrentTime/> SGT
				</div>
		</div>
	);
}
