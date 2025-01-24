import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import VisuallyHidden from '@/components/VisuallyHidden';

interface RefreshButtonProps {
	handleRefresh: () => void;
}

const RefreshButton = ({ handleRefresh }: RefreshButtonProps) => {
	const [rotation, setRotation] = useState(0);
	return (
		<abbr>
			<button
				title="Refresh Preview"
				className={`origin-center transition-transform ease-out duration-500 action-btn`}
				style={{ transform: `rotate(${rotation}deg)` }} // This is a dynamic style
				onClick={() => {
					handleRefresh();
					setRotation((r) => r + 180);
				}}
			>
				<RefreshCw size={16} />
				<VisuallyHidden>Refresh for rerender result</VisuallyHidden>
			</button>
		</abbr>
	);
};

export default RefreshButton;
