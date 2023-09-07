import React from "react";
import Link from "next/link";

export default function EssaySection({key, data}) {
    
	return (
        <>
            <div key={key} className="portrait:hidden flex h-[25vh] gap-x-5 bg-pink-30 ">
                <img src={data.img_src} className='h-[25vh]'/>
                <div className="flex flex-col justify-between ">
                    <Link
                        href={{
                            pathname: `/essays/${data.title.replaceAll(' ', '-')}`
                        }}
                        className="text-xl font-bold hover:text-gray-500">
                            {data.title}
                    </Link>
                    <div className="text-[13px] pt-1 w-fit">{data.date}</div>
                    <p className="text-sm pt-1 pr-2 h-[15vh] leading-[3vh] line-clamp-5 text-ellipsis">
                        {data.text}
                    </p>
                    <div className="bg-gray-300 dark:bg-gray-700 px-3 py-1 my-2 w-fit rounded-full">{data.topic}</div>
                </div>
            </div>
            {/* <div className="landscape:hidden flex flex-col items-center gap-x-5 bg-pink-30">
                <Link
                    href={{
                            pathname: `/essays/${data.title.replaceAll(' ', '-')}`
                        }}
                        className="text-md font-bold hover:text-gray-500">
                            {data.title}
                </Link>
                <img src={data.img_src} className='aspect-square w-[75%]'/>
                <div className="text-[13px] pt-1 w-fit">{data.date}</div>
                <p className="text-sm pt-1 h-[15vh] leading-[3vh] line-clamp-5 text-ellipsis">
                    {data.text}
                </p>
                <div className="bg-gray-300 dark:bg-gray-700 px-3 py-1 my-2 w-fit rounded-full">{data.topic}</div>
            </div> */}
            <div key={key} className="landscape:hidden flex gap-x-3 w-full aspect-[2.85/1]">
                <div className="bg-blue-40 aspect-square">
                    <img src={data.img_src} className=''/>
                </div>
                <div className="flex flex-col justify-between bg-green-20">
                    <Link
                        href={{
                            pathname: `/essays/${data.title.replaceAll(' ', '-')}`
                        }}
                        className="text-[15px] font-bold hover:text-gray-500">
                            {data.title}
                    </Link>
                    <div className="text-[10.5px] mt-1 w-fit">{data.date}</div>
                    <p className="flex my-2 text-[12px] bg-pink-30 h-[15vh] leading-2">
                        {data.text}
                    </p>
                    <div className="text-[12px] bg-gray-300 dark:bg-gray-700 px-3 py-1 w-fit rounded-full">{data.topic}</div>
                </div>
            </div>
        </>

	);
}
