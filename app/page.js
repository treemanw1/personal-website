import Navbar from './components/Navbar';
import CurrentTime from './components/CurrentTime';

export default function Home() {
	return (
		<div className="flex justify-center bg-gray-100 min-h-screen">
			<div className='flex flex-col mt-[10vh] gap-y-3 w-[30%]'>
				<h1 className="text-black text-4xl font-bold">Neville Wee</h1>
				<Navbar/>
				<img src='/images/vagabond.jpg' className=''/>
				<div className='text-black italic whitespace-nowrap inline-block'>
					Time in Singapore - <CurrentTime/> SGT
				</div>
			</div>
		</div>
	);
}
