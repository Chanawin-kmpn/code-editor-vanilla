import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface RefreshButtonProps {
    handleRefresh: () => void
}

const RefreshButton = ({ handleRefresh }: RefreshButtonProps) => {
	const [rotation, setRotation] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	return (
		<abbr title="Refresh pane">
			<button className="origin-center transition-opacity duration-[250]" onClick={() => {
                handleRefresh();
                setRotation((r) => r + 180)
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                transform: `rotate(${rotation}deg)`,
                opacity: isHovering ? 1 : 0.7
            }}>
				<RefreshCw size={16} />

			</button>
		</abbr>
	);
};

export default RefreshButton;
