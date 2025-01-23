import VisuallyHidden from '@/components/VisuallyHidden';
import { Undo2 } from 'lucide-react';
import React from 'react';

interface ResetButtonProps {
	handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
	return (
		<button onClick={handleReset} className="action-btn">
			<Undo2 />
			<VisuallyHidden>Reset Code</VisuallyHidden>
		</button>
	);
};

export default ResetButton;
