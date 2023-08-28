import React from "react";
import Link from "next/link";

export default function EssaySection({data}) {
    
	return (
        <div className="flex h-[25vh]">
            <div className="flex flex-col justify-between ">
                <Link
                    href={{
                        pathname: `/essays/${data.title}`,
                        query: data
                    }}
                    className="text-xl font-bold hover:text-gray-500">
                        {data.title}
                </Link>
                <p className="text-sm h-[15vh] leading-[3vh] line-clamp-5 text-ellipsis">
                    {data.text}
                </p>
                <div className="bg-gray-300 px-3 mt-1 w-fit rounded-full">{data.topic}</div>
            </div>
            <img src={data.img_src} className='h-[25vh]'/>
        </div>
	);
}
