'use client'

import Navbar from './components/Navbar';
import CurrentTime from './components/CurrentTime';

export default function Home() {
	return (
		<>
			{/* Landscape */}
			<div className='portrait:hidden flex flex-col w-[45%] justify-center'>
				<img className='mt-8' src='/images/vagabond long.jpg'/>
				<div className='italic whitespace-nowrap inline-block pb-12'>
					Time in Singapore - <CurrentTime/> SGT
				</div>
			</div>
			{/* Portrait */}
			<div className='landscape:hidden grow mb-20 flex flex-col justify-center items-center h-full'>
				<img className='w-[90%]' src='/images/vagabond long.jpg'/>
				<div className='italic whitespace-nowrap inline-block'>
					Time in Singapore - <CurrentTime/> SGT
				</div>
			</div>
		</>

	);
}
