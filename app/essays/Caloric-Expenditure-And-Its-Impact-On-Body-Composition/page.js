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
				<img src="/images/jones weight.jpg" alt="Jon Jones LHW vs HW" />
				<div className="flex flex-col gap-y-2 mt-2">
					<p>
						&nbsp;&nbsp;&nbsp;&nbsp;One question I've had about body
						composition for a while is about how it varies with activity
						level while eating at maintenance calories.
					</p>
					<p>
						Given two identical individuals A and B, where A expends
						1000 calories through a combination of strength training and
						cardio, whereas B expends 300 calories through solely
						strength training (daily for an extended period of time),
						with both individuals eating at maintenance calories, how
						would their body compositions differ?
					</p>
				</div>
			</div>
	);
}
