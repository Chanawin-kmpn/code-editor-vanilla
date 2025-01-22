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
			<header>
				<p className="">{title}</p>
				{actions}
			</header>
			{children}
		</div>
	);
};

export default Pane;
