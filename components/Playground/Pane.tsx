import React from 'react';
interface PaneProps {
	title: string;
	children: React.ReactNode;
	actions?: React.ReactNode;
	style?: { [key: string]: string | number | undefined };
}

const Pane = ({ title, children, actions, ...delegated }: PaneProps) => {
	return (
		<div className="pb-4 px-4 flex flex-col h-full p" {...delegated}>
			<div className="flex items-center justify-between h-[46px] mb-6 border-b border-zinc-500">
				<p className="font-firaCode cursor-default">{title}</p>
				{actions}
			</div>
			{children}
		</div>
	);
};

export default Pane;
