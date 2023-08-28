import React from "react";
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

function QuestionMarkButton() {
	return (
        <button className="" title="About me">
			<QuestionMarkCircleIcon className="h-6 w-6 text-black hover:text-gray-500" />
		</button>
	);
}

export default QuestionMarkButton;
