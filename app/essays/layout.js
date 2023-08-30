"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { usePathname } from "next/navigation";

export default function EssayLayout({children}) {

    const pathname = usePathname()
    .split("/")
    .slice(-1)
    .toString()
    .replaceAll("-", " ");
 
	return (
		<>
			<h1 className="text-4xl font-bold">Essays</h1>
			<Navbar />
			{children}
		</>
	);
}
