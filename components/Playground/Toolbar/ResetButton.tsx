import { Undo2 } from 'lucide-react';
import React from 'react';

interface ResetButtonProps {
	handleReset: () => void;
}

const ResetButton = ({ handleReset }: ResetButtonProps) => {
	return (
		<button onClick={handleReset}>
			<Undo2 />
		</button>
	);
};

export default ResetButton;
