import React from 'react';
interface PaneProps {
	title: string;
	children: React.ReactNode;
	actions?: React.ReactNode;
	style?: { [key: string]: string | undefined };
}

const Pane = ({ title, children, actions, ...delegated }: PaneProps) => {
	return (
		<div className="pb-4 flex flex-col h-full" {...delegated}>
			<header>
				<p className="">{title}</p>
				{actions}
			</header>
			{children}
		</div>
	);
};

export default Pane;
