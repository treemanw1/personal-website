'use client'

import React from "react";
import Navbar from "@/app/components/Navbar";
import { useSearchParams } from 'next/navigation'

export default function Page({ params }) {

    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    console.log(search);

    return (
		<div className="flex justify-center bg-gray-100 min-h-screen">
			<div className="flex flex-col mt-[10vh] gap-y-3 w-[30%]">
				<h1 className="text-4xl font-bold">{decodeURIComponent(params.essay)}</h1>
				<Navbar />
				<div className="flex flex-col gap-y-5 mb-10">
                    {/* {data.text} */}
				</div>
			</div>
		</div>
	);
}
