import React from "react";
import Link from "next/link";

export default function EssaySection({data}) {
    
	return (
        <div className="flex h-[25vh] justify-between">
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
                <div className="bg-gray-300 px-3 my-2 w-fit rounded-full hover:text-gray-200 hover:bg-gray-400">{data.topic}</div>
            </div>
            <img src={data.img_src} className='h-[25vh]'/>
        </div>
	);
}
