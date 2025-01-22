import React from 'react';
import FormatButton from './FormatButton';
import ResetButton from './ResetButton';

interface ToolbarProps {
	title: string;
	isFullscreened: boolean;
	handleToggleFullscreen: () => void;
	handleReset: () => void;
	handleFormat: () => void;
}

const Toolbar = ({ title, handleReset, handleFormat }: ToolbarProps) => {
	return (
		<div className="relative flex justify-between items-center h-8 leading-8 px-4 bg-zinc-700 rounded-t-md">
			<p className="text-sm font-firaCode font-bold">
				{title || 'Code Playground'}
			</p>
			<div className="flex gap-2 -mr-[10px] text-white">
				<FormatButton handleFormat={handleFormat} />
				<ResetButton handleReset={handleReset} />
			</div>
		</div>
	);
};

export default Toolbar;
