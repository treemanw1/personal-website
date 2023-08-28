"use client"
import React, { useState, useEffect } from "react";

function CurrentTime() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div className="inline-block" suppressHydrationWarning>{currentTime.toLocaleTimeString()}</div>;
}

export default CurrentTime;
