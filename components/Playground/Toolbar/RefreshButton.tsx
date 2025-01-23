import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import VisuallyHidden from '@/components/VisuallyHidden';

interface RefreshButtonProps {
	handleRefresh: () => void;
}

const RefreshButton = ({ handleRefresh }: RefreshButtonProps) => {
	const [rotation, setRotation] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	return (
		<abbr title="Refresh pane">
			<button
				className={`origin-center transition-all duration-500 ${isHovering ? 'opacity-100' : 'opacity-70'} action-btn`}
				style={{ transform: `rotate(${rotation}deg)` }} // This is a dynamic style
				onClick={() => {
					handleRefresh();
					setRotation((r) => r + 180);
				}}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				<RefreshCw size={16} />
				<VisuallyHidden>Refresh for rerender result</VisuallyHidden>
			</button>
		</abbr>
	);
};

export default RefreshButton;
