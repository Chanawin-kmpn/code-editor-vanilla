import VisuallyHidden from '@/components/VisuallyHidden';
import { Wand } from 'lucide-react';
import React from 'react';

interface FormatButtonProps {
	handleFormat: () => void;
}

const FormatButton = ({ handleFormat }: FormatButtonProps) => {
	return (
		<button onClick={handleFormat} className="action-btn">
			<Wand />
			<VisuallyHidden>Format code using Prettier</VisuallyHidden>
		</button>
	);
};

export default FormatButton;
