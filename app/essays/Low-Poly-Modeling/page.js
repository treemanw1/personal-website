"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Page() {
	const pathname = usePathname()
		.split("/")
		.slice(-1)
		.toString()
		.replaceAll("-", " ");

	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold w-[150%]">{pathname}</h1>
			<div className="italic my-1">
				30<sup>th</sup> October 2023
			</div>
			<img src="/images/low poly fairy.gif" />
			<div className="flex flex-col gap-y-2 mt-2">
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;I really like the aesthetic of low
					poly vintage PS1-esque graphics, and have been looking into 
					how to replicate the aesthetic with modern software.
				</p>
			</div>
		</div>
	);
}
