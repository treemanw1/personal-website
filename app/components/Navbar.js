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
        <div className='flex items-center gap-x-3'>
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
            <Link title='My GitHub' rel="noopener noreferrer" target="_blank" className='flex items-center justify-center h-6 w-6' href='https://github.com/treemanw1'>
                <svg class="fill-black hover:fill-current hover:text-gray-500" width="22" height="20" viewBox="0 0 98 97" xmlns="http://www.w3.org/2000/svg" fill="none"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        fill="" />
                </svg>
            </Link>
            <Link title='My LinkedIn' rel="noopener noreferrer" target="_blank" className='flex items-center justify-center h-6 w-6 p-[2px]' href=''>
                <svg class="fill-black hover:fill-current hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </Link>
            <Link title='My Spotify' rel="noopener noreferrer" target="_blank" className='flex items-center justify-center h-6 w-6 p-[2px]' href='https://open.spotify.com/user/21cybi2de2gqhhmevcmut7sfq?si=8739c37bf48d4f31'>
                <svg class="fill-black hover:fill-current hover:text-gray-500" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd">
                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                </svg>
            </Link>
            <button className='flex items-center justify-center h-6 w-6'>
                <MoonIcon className="h-[23px] w-[23px] text-black hover:text-gray-500" />
            </button>
        </div>
    );
}

export default Navbar;
