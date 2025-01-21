/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Editor from './Editor';

interface TabbedEditorsProps {
	paneData: Array<{
		language: string;
		label: string;
		code: string;
		handleUpdate: (code: string) => void;
	}>;
	splitRatio: number;
	maxHeight: string;
	handleFormat: () => void;
}

const TabbedEditors = ({
	paneData,
	splitRatio,
	maxHeight,
	handleFormat,
	...delegated
}: TabbedEditorsProps) => {
	const [firstPane, secondPane] = paneData;

	const [activeLanguage, setActiveLanguage] = useState(firstPane.language);

	const activePane =
		activeLanguage === firstPane.language ? firstPane : secondPane;
	return (
		<div className="p-4 pt-0 flex flex-col h-full max-h-full" {...delegated}>
			<div className="flex items-center space-x-4 h-[46px]">
				{paneData.map(
					(pane: {
						language: string;
						label: string;
						code: string;
						handleUpdate: (code: string) => void;
					}) => (
						<button
							key={pane.language}
							className={`${pane === activePane ? 'font-bold text-zinc-500' : 'font-normal text-zinc-200'}  px-4 py-2 rounded-md`}
							onClick={() => setActiveLanguage(pane.language)}
						>
							{pane.label}
						</button>
					)
				)}
			</div>
			<div className="flex-1">
				<Editor
					code={activePane.code}
					language={activePane.language}
					handleUpdate={activePane.handleUpdate}
					handleFormat={handleFormat}
					maxHeight={maxHeight}
				/>
			</div>
		</div>
	);
};

export default TabbedEditors;
