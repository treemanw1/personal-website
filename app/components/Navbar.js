import React from "react";

import { HomeIcon } from '@heroicons/react/20/solid'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { NewspaperIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/20/solid'

import Link from 'next/link';

function Navbar() {
	return (
        <div className='flex items-center gap-x-3 my-5 ml-20'>
            <Link className='flex items-center' href='/'>
                <HomeIcon title='Home' className="h-6 w-6 text-black hover:text-gray-500" />
            </Link>
            <Link className='flex items-center' href='/about'>
                <QuestionMarkCircleIcon title='About me' className="h-[25px] w-[25px] text-black hover:text-gray-500" />
            </Link>
            <Link className='flex items-center' href='/essays'>
                <NewspaperIcon title='Essays' className="h-6 w-6 text-black hover:text-gray-500" />
            </Link>
            <Link className='flex items-center' href='/reading-list'>
                <BookOpenIcon title='Reading List' className="mt-[1px] h-6 w-6 text-black hover:text-gray-500" />
            </Link>
            {/* <Link className='flex items-center' href='/projects'>
                <CodeBracketIcon title='Projects' className="h-5 w-5 text-black stroke-2 hover:text-gray-500" />
            </Link> */}
            <button className='flex items-center justify-center h-6 w-6'>
                <MoonIcon className="h-[23px] w-[23px] text-black hover:text-gray-500" />
            </button>
        </div>
    );
}

export default Navbar;
