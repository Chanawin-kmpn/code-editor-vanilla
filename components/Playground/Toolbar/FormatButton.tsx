import { Wand } from 'lucide-react';
import React from 'react';

interface FormatButtonProps {
	handleFormat: () => void;
}

const FormatButton = ({ handleFormat }: FormatButtonProps) => {
	return (
		<button onClick={handleFormat}>
			<Wand size={16} />
		</button>
	);
};

export default FormatButton;
